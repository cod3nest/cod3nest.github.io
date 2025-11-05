'use client'

import { useEffect, useRef } from 'react'

export default function GiscusComments() {
  const commentsRef = useRef(null)

  useEffect(() => {
    // Only load Giscus if not already loaded
    if (commentsRef.current && !commentsRef.current.hasChildNodes()) {
      const script = document.createElement('script')
      script.src = 'https://giscus.app/client.js'
      script.setAttribute('data-repo', 'cod3nest/cod3nest.github.io')
      script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkxMDU1NDE0MDI=')
      script.setAttribute('data-category', 'General')
      script.setAttribute('data-category-id', 'DIC_kwDOBkpvGs4CxdgG')
      script.setAttribute('data-mapping', 'pathname')
      script.setAttribute('data-strict', '1')
      script.setAttribute('data-reactions-enabled', '1')
      script.setAttribute('data-emit-metadata', '0')
      script.setAttribute('data-input-position', 'top')
      script.setAttribute('data-theme', 'preferred_color_scheme')
      script.setAttribute('data-lang', 'en')
      script.crossOrigin = 'anonymous'
      script.async = true

      commentsRef.current.appendChild(script)
    }
  }, [])

  return (
    <div className="giscus-comments">
      <div ref={commentsRef} />
    </div>
  )
}
