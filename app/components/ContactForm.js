'use client'

import { useEffect, useState } from 'react'

const ContactForm = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  // Only render on client to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="calendly-placeholder" style={{ minWidth: '320px', height: '630px', background: '#f8fafc', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="text-slate-500">Loading calendar...</p>
      </div>
    )
  }

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/your_calendly_link"
      style={{ minWidth: '320px', height: '630px' }}
    ></div>
  )
}

export default ContactForm