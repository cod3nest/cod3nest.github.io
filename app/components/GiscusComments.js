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
      script.setAttribute('data-repo-id', 'YOUR_REPO_ID') // You'll need to get this from giscus.app
      script.setAttribute('data-category', 'Blog Comments')
      script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID') // You'll need to get this from giscus.app
      script.setAttribute('data-mapping', 'pathname')
      script.setAttribute('data-strict', '0')
      script.setAttribute('data-reactions-enabled', '1')
      script.setAttribute('data-emit-metadata', '0')
      script.setAttribute('data-input-position', 'top')
      script.setAttribute('data-theme', 'light')
      script.setAttribute('data-lang', 'en')
      script.setAttribute('data-loading', 'lazy')
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
