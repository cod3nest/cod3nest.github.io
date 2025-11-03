# Codenest – Technical Leadership for Startups

This repository contains the source code for [codenest.uk](https://codenest.uk), a technical consultancy focused on helping startups navigate the critical 0→1 phase.

## About

Codenest provides technical leadership and engineering execution for early-stage startups. We specialize in:

- Fractional CTO services
- 0→1 Product builds (MVP development)
- AI & Data Engineering
- IaC & GitOps acceleration
- Technical Due Diligence

Our approach combines rapid iteration with production-grade infrastructure — using Infrastructure as Code and GitOps to deliver speed without sacrificing reliability.

## Tech Stack

This website is built with:
- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- EmailJS for contact form
- Deployed to GitHub Pages via static export

## Development

### Prerequisites
- Node.js 18+ and npm installed
- EmailJS account for contact form (optional for development)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/cod3nest/cod3nest.github.io.git
cd cod3nest.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional, for contact form):
```bash
cp .env.local.example .env.local
# Edit .env.local with your EmailJS credentials
```

### Running Locally

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
# Build the app with static export
npm run build
```

This will create an `out` directory with static files ready for deployment.

### Deploying to GitHub Pages

```bash
# Build and prepare for deployment
npm run predeploy

# Commit and push to gh-pages branch
git add .
git commit -m "Deploy updates"
git push origin gh-pages
```

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── ContactForm.js    # Client-side contact form
│   │   └── Navigation.js      # Navigation component
│   ├── globals.css            # Global styles and Tailwind imports
│   ├── layout.js              # Root layout with metadata
│   └── page.js                # Home page with all sections
├── public/                    # Static assets
├── next.config.js             # Next.js configuration for static export
├── tailwind.config.js         # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

## Environment Variables

The contact form requires EmailJS configuration. Create a `.env.local` file based on `.env.local.example`:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

Get these from your [EmailJS dashboard](https://dashboard.emailjs.com/).

## Contact

For inquiries about services or partnerships, visit [codenest.uk](https://codenest.uk) or use the contact form on the website.

---

© 2025 Codenest. All rights reserved.
