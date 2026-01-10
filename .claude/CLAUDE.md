# Rewrite Next.js Consultancy Website for GitHub Pages

You are an expert **Next.js engineer** and **brand strategist**.

I already have a **Next.js website in a GitHub repository**, currently deployed via **GitHub Pages**, and I want to **rewrite and reposition it** for my consultancy business.

---

## Agent Routing for This Project

Use specialized agents proactively based on task type:

| Task | Recommended Agent |
|------|-------------------|
| Content strategy & SEO | `cmo` (Chief Marketing Officer) |
| Brand messaging & copy | `cmo` with brand focus |
| UI/UX improvements | `cdo` (Chief Design Officer) or `ui-designer` |
| Component development | `frontend-engineer` |
| Deployment & CI/CD | `devops-engineer` |
| Performance optimization | `frontend-engineer` or `cqo` |
| Accessibility audit | `frontend-engineer` with a11y focus |

### Relevant Skills
- `/coding-conventions` - Detect and follow existing Next.js patterns
- `/tech-stack-detection` - Identify frameworks and dependencies
- `/frontend-engineer` - React/Next.js component patterns
- `/safe-refactoring` - When restructuring existing code

---

## Goal
Transform the existing website into a **professional, founder-focused IT consultancy site** that targets **startups going from 0→1**, highlighting my **unique approach using Infrastructure as Code (IaC) and GitOps** for rapid, reliable iteration.

---

## Company Overview
- **Focus:** Helping startups move from concept to scalable product.
- **Services:** Fractional CTO, Product Architecture, MVP Engineering, AI/Data Integration, Technical Due Diligence.
- **USP:** I deliver speed *and* structure — using **templated cloud architectures**, **IaC**, and **GitOps**, I help teams build quickly while maintaining production-grade standards and observability.
- **Tone:** Confident, technical, clear, startup-savvy (no emojis, no fluff).
- **Style:** Modern, minimal, founder-oriented design. Neutral colors, clean typography.

---

## Tasks

### 1. Rewrite Site Content Across All Pages
- Focus on **startup and founder audience**.
- Highlight the **0→1 journey** (idea → prototype → scalable architecture).
- Emphasize the benefits of **IaC and GitOps** as enablers of speed, reliability, and maintainability.
- Clarify **outcomes**: faster delivery, scalable systems, clean handovers, repeatable frameworks.

### 2. Homepage
- **Hero headline:**  
  “From Idea to Scalable Product — Technical Leadership for Startups.”
- **Subtext:**  
  “We help founders build fast and scale smart — combining engineering execution with reproducible IaC and GitOps foundations.”
- **CTA:** “Book a Discovery Call.”
- Short sections:
    - **What We Do:** Fractional CTO, MVP Delivery, AI & Cloud.
    - **Why It Works:** IaC & GitOps efficiency.
    - **Testimonials placeholder.**

### 3. Services Page
- **Fractional CTO:** technical leadership, team scaling, architecture reviews.
- **0→1 Product Builds:** MVP development using modular, cloud-native templates.
- **AI & Data Engineering:** LLM integration, MLOps, scalable data pipelines.
- **IaC & GitOps Acceleration:** reproducible environments and CI/CD pipelines for faster iteration and reliable delivery.
- **Technical Due Diligence:** investor readiness, scalability audits, system design assessments.

### 4. Approach Page
- **3-Stage Model:**
    1. *Discover & Define:* clarify vision, user value, product scope.
    2. *Architect & Accelerate:* establish IaC, CI/CD, GitOps templates before coding.
    3. *Deliver & Handover:* launch MVP, ensure observability, document ownership.
- Emphasize:  
  “Every engagement begins with a production-grade foundation — so iteration is safe, fast, and measurable.”

### 5. About Page
- Founder story: experienced startup engineer, built and led teams, guided early-stage founders, implemented repeatable technical frameworks.
- Values: clarity, reliability, craftsmanship.
- Philosophy:  
  “We believe speed comes from structure — Infrastructure as Code and GitOps bring the discipline startups need without slowing innovation.”

### 6. Contact Page
- Professional contact form with validation.
- Call to action: “Let’s discuss your next product milestone.”
- Placeholder for **Calendly** or email.

---

## Technical Instructions
1. Maintain **current design system, layout, and Tailwind CSS styling**, updating only copy and minor structural adjustments for new positioning.
2. Ensure **Next.js App Router compatibility**.
3. Update **SEO metadata**:
    - Keywords: “startup CTO”, “fractional CTO”, “0-1 product”, “GitOps consulting”, “Infrastructure as Code”, “startup technical partner”.
4. Ensure **site remains deployable on GitHub Pages**:
    - Configure `output: 'export'` in `next.config.js` (replaces deprecated `next export`).
    - Add `basePath` if repo is served from a subdirectory.
    - Ensure all internal links work with static export.
    - Include `.nojekyll` file in output to prevent Jekyll processing.
5. Keep copy **professional, concise, and technical** — no emojis.

---

## Expected Output
1. **Updated Next.js page code** for all rewritten pages.
2. **Updated metadata and README** (deployment instructions for GitHub Pages).
3. **Short note** explaining how the new positioning strengthens founder appeal and differentiates the consultancy, optimized for SEO.

---

## Definition of Done

Before considering any task complete, verify:

### Build & Deploy
- [ ] `npm run build` passes without errors
- [ ] GitHub Actions deployment workflow succeeds
- [ ] Site loads correctly on codenest.uk

### Quality
- [ ] Lighthouse performance score > 90
- [ ] No accessibility violations (WCAG 2.1 AA)
- [ ] Mobile responsiveness verified (320px - 1920px)
- [ ] No console errors in browser

### SEO
- [ ] All pages have unique meta titles and descriptions
- [ ] Open Graph tags present for social sharing
- [ ] Sitemap.xml updated and valid
- [ ] No broken internal links

### Content
- [ ] Copy matches brand tone (professional, technical, no fluff)
- [ ] CTAs are clear and functional
- [ ] Contact form validation works


<claude-mem-context>
# Recent Activity

<!-- This section is auto-generated by claude-mem. Edit content outside the tags. -->

*No recent activity*
</claude-mem-context>