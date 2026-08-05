'use client'

import { useEffect } from 'react'

// The app ID is not a secret — it ships in the client-side embed on every page.
const CUSDIS_HOST = 'https://cusdis.com'
const CUSDIS_APP_ID = '6a10cc4a-dff8-4e81-b9b5-edfe7802f7eb'
const SDK_URL = `${CUSDIS_HOST}/js/cusdis.es.js`

export default function CusdisComments({ pageId, pageUrl, pageTitle }) {
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
      data-host={CUSDIS_HOST}
      data-app-id={CUSDIS_APP_ID}
      data-page-id={pageId}
      data-page-url={pageUrl}
      data-page-title={pageTitle}
      data-theme="light"
    />
  )
}
