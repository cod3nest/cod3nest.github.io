'use client'

import { useState, useEffect } from 'react'

export default function TableOfContents({ content }) {
  const [activeId, setActiveId] = useState('')
  const [headings, setHeadings] = useState([])

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^#{2,3}\s+(.+)$/gm
    const matches = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[0].startsWith('###') ? 3 : 2
      const text = match[1].replace(/[*_`]/g, '') // Remove markdown formatting
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')

      matches.push({ id, text, level })
    }

    setHeadings(matches)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <nav className="hidden xl:block sticky top-32 ml-8 w-64 max-h-[calc(100vh-10rem)] overflow-y-auto">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
        On this page
      </p>
      <ul className="space-y-2 text-sm border-l border-slate-200">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block py-1 transition-colors ${
                level === 3 ? 'pl-6' : 'pl-4'
              } ${
                activeId === id
                  ? 'text-accent-600 border-l-2 border-accent-500 -ml-px font-medium'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  setActiveId(id)
                }
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
