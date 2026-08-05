'use client'

import { useEffect, useRef } from 'react'

// The app ID is not a secret — it ships in the client-side embed on every page.
const CUSDIS_HOST = 'https://cusdis.com'
const CUSDIS_APP_ID = '6a10cc4a-dff8-4e81-b9b5-edfe7802f7eb'
const SDK_URL = `${CUSDIS_HOST}/js/cusdis.es.js`

// Cusdis renders the widget into a srcdoc iframe and is supposed to size it from
// a postMessage the inner frame sends on load. That message never arrives, so the
// iframe sits at the 150px HTML default and the comments scroll inside it. The
// same happens with Cusdis's own plain-HTML snippet, so this is not a React
// problem. A srcdoc iframe is same-origin, so we can measure the real content
// height ourselves and drop this once upstream fixes the resize event.
const HEIGHT_POLL_MS = 250

function useAutoHeight(containerRef) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Polling rather than a ResizeObserver: the height that matters is the body's
    // scrollHeight, and that changes without the observed box changing — the frame
    // measures 452px while the widget stylesheet is still loading and settles to
    // 396px after, which an observer never reports. Re-reading contentDocument on
    // every tick also survives the SDK reassigning srcdoc, which swaps the
    // document out from under any listener bound to the old one. Three property
    // reads a second is cheaper than the machinery needed to catch both cases.
    const sizeToContent = () => {
      const iframe = container.querySelector('iframe')
      const height = iframe?.contentDocument?.body?.scrollHeight
      if (!height) return
      if (iframe.style.height !== `${height}px`) iframe.style.height = `${height}px`
    }

    sizeToContent()
    const timer = setInterval(sizeToContent, HEIGHT_POLL_MS)

    return () => clearInterval(timer)
  }, [containerRef])
}

export default function CusdisComments({ pageId, pageUrl, pageTitle }) {
  const containerRef = useRef(null)

  useAutoHeight(containerRef)

  useEffect(() => {
    // On client-side navigation the SDK is already loaded, so the script tag
    // never fires again — re-initialise it against the new thread element.
    if (window.CUSDIS) {
      window.CUSDIS.initial()
      return
    }

    if (document.querySelector(`script[src="${SDK_URL}"]`)) return

    const script = document.createElement('script')
    script.src = SDK_URL
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [pageId])

  return (
    <div
      id="cusdis_thread"
      ref={containerRef}
      data-host={CUSDIS_HOST}
      data-app-id={CUSDIS_APP_ID}
      data-page-id={pageId}
      data-page-url={pageUrl}
      data-page-title={pageTitle}
      data-theme="light"
    />
  )
}
