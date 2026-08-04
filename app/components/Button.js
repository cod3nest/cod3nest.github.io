import Link from 'next/link'

// The single source of truth for CTA styling (BRANDING.md §6).
// variant="primary": gold fill — the one conversion action per screen.
// variant="secondary": slate outline, gold on hover.
const VARIANTS = {
  primary:
    'inline-block bg-accent-400 text-primary-900 font-semibold rounded-lg shadow-gold hover:bg-accent-500 hover:shadow-gold-lg transition-all text-center',
  secondary:
    'inline-block border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-accent-400 hover:text-primary-700 transition-all text-center',
}

const SIZES = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({ href, variant = 'primary', size = 'lg', className = '', children, ...rest }) {
  const classes = `${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim()
  const isInternalPage = href.startsWith('/') && !href.includes('#')
  if (isInternalPage) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  )
}
