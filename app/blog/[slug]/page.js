import Link from 'next/link'
import GiscusComments from '../../components/GiscusComments'

// Blog posts data - in a real app, this would come from a CMS or markdown files
const blogPosts = {
  'from-chaos-to-gitops': {
    title: 'From Chaos to GitOps: How We Scaled Rungway from 5 to 5000 Users',
    date: '2024-11-05',
    author: 'Codenest Team',
    readTime: '8 min read',
    tags: ['GitOps', 'Scaling', 'Case Study'],
    content: `
# From Chaos to GitOps: How We Scaled Rungway from 5 to 5000 Users

When we joined Rungway as the core backend and DevOps team, the platform could barely handle five concurrent users. Every deployment was a nerve-wracking manual process. Database queries timed out under minimal load. There was no monitoring, no CI/CD, and no clear path to scaling.

Six months later, the platform was serving thousands of users with zero downtime deployments, automated rollbacks, and production-grade observability.

## The Challenge

The original architecture was a classic monolith with several critical issues:

- **No deployment automation** – Every release required manual SSH access and prayer
- **Zero observability** – We were flying blind with no metrics or logging
- **Database bottlenecks** – Unoptimized queries caused timeouts under load
- **Fragile infrastructure** – A single server failure meant total outage

## The Solution: GitOps + IaC

We didn't rewrite everything overnight. Instead, we implemented a phased approach:

### Phase 1: Observability First

Before fixing anything, we needed to *see* what was broken. We implemented:

- **Structured logging** with ELK stack
- **Metrics collection** with Prometheus
- **Application monitoring** with custom dashboards
- **Alerting** for critical failures

**Result:** We could now identify bottlenecks and measure improvements.

### Phase 2: Infrastructure as Code

We moved all infrastructure to Terraform:

\`\`\`hcl
# Example: Database configuration
resource "aws_db_instance" "production" {
  identifier        = "rungway-prod-db"
  engine            = "postgres"
  instance_class    = "db.t3.medium"
  allocated_storage = 100

  backup_retention_period = 7
  multi_az               = true

  tags = {
    Environment = "production"
    ManagedBy   = "terraform"
  }
}
\`\`\`

**Result:** Infrastructure became reproducible and version-controlled.

### Phase 3: GitOps Deployment Pipeline

We implemented a complete GitOps workflow:

1. **Code pushed to GitHub** triggers CI pipeline
2. **Automated tests** run on every PR
3. **Docker images** built and pushed to registry
4. **ArgoCD** syncs Kubernetes manifests
5. **Automated rollback** if health checks fail

**Result:** Deployments went from manual processes to automated, safe operations.

### Phase 4: Database Optimization & Microservices

- Identified and fixed N+1 queries
- Implemented database read replicas
- Started extracting critical services into microservices
- Added caching layers with Redis

**Result:** Response times dropped from seconds to milliseconds.

## The Results

**Before:**
- Manual deployments taking 2-3 hours
- Regular downtime during releases
- No confidence in system stability
- 5 concurrent users was the ceiling

**After:**
- Multiple deployments per day
- Zero-downtime releases
- Complete system observability
- Serving thousands of concurrent users

## Key Lessons

1. **Observability comes first** – You can't fix what you can't see
2. **Automate incrementally** – Don't try to boil the ocean
3. **Infrastructure as Code is non-negotiable** – Manual changes don't scale
4. **GitOps builds confidence** – When deployments are safe, you ship faster

## What We'd Do Differently

If we were starting today, we'd:

- **Start with Kubernetes** from day one (we migrated later)
- **Implement feature flags** earlier for safer rollouts
- **Set up staging environment** that mirrors production exactly

## Conclusion

Scaling isn't just about handling more traffic – it's about building systems that let teams move fast without breaking things.

The fastest startups aren't the ones who skip infrastructure. They're the ones who automate it.

**Want help scaling your infrastructure?** We help startups build production-grade systems using GitOps, IaC, and cloud-native platforms. [Book a discovery call](/#contact).
    `
  },
  'iac-for-startups': {
    title: 'Why Every Startup Should Start with Infrastructure as Code',
    date: '2024-10-28',
    author: 'Codenest Team',
    readTime: '6 min read',
    tags: ['IaC', 'Startups', 'DevOps'],
    content: `
# Why Every Startup Should Start with Infrastructure as Code

"We'll add proper infrastructure later" is one of the most expensive lies startups tell themselves.

Infrastructure as Code (IaC) isn't enterprise bloat. It's the secret weapon that lets small teams move fast *and* maintain stability.

## What is Infrastructure as Code?

Instead of clicking through AWS/GCP consoles and hoping you remember what you did, you define infrastructure in code:

\`\`\`hcl
# Terraform example
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"

  tags = {
    Name = "production-web-server"
  }
}
\`\`\`

That's it. Your infrastructure is now:
- **Version controlled** (in Git)
- **Reproducible** (run it again, get the same result)
- **Documented** (the code IS the documentation)
- **Testable** (before you apply changes)

## "But We're Too Early for That"

Wrong. Here's why IaC is *more* important for early-stage startups:

### 1. You'll Rebuild Environments Constantly

- Staging environment breaks? Rebuild in 5 minutes
- New developer joins? Spin up their environment automatically
- Investor demo tomorrow? Create a demo environment tonight

Without IaC: Pray you remember all the manual steps.

### 2. You Can't Afford Downtime

When you're fighting for product-market fit, every minute of downtime loses trust.

IaC + GitOps means:
- Automated rollbacks when things break
- Tested changes before they hit production
- Clear audit trail of what changed when

### 3. Your Time is Precious

Manual infrastructure work is:
- Error-prone
- Time-consuming
- Impossible to delegate
- Undocumented (good luck when someone leaves)

With IaC:
- Changes are reviewable (like code)
- Junior devs can contribute safely
- Onboarding is "read the Terraform files"

## Real Example: MVP to Series A

A recent client came to us with:
- 3 engineers
- Manual deployments
- AWS console configs no one understood

We helped them implement:
- Terraform for all infrastructure
- GitHub Actions for CI/CD
- ArgoCD for Kubernetes deployments

**Results:**
- Deployment time: 2 hours → 5 minutes
- Staging environment setup: 1 day → 10 minutes
- Team velocity: Doubled (less time firefighting)

## Getting Started: The Minimum Viable IaC

You don't need to automate everything day one. Start here:

### Step 1: Pick a Tool
- **Terraform** – Most popular, cloud-agnostic
- **Pulumi** – Write IaC in TypeScript/Python
- **AWS CDK** – Great if all-in on AWS

### Step 2: Codify Your Core Infrastructure
Start with:
- Database instances
- Load balancers
- DNS/domain configuration
- Storage buckets

### Step 3: Add CI/CD
Use GitHub Actions or similar to:
- Run \`terraform plan\` on PRs
- Auto-apply on merge to main
- Store state securely (Terraform Cloud is free for small teams)

### Step 4: Expand Gradually
- Add monitoring configuration
- Automate environment creation
- Implement deployment pipelines

## Common Objections (and Why They're Wrong)

**"It's too complex for our small team"**
→ More complex than clicking through AWS console and forgetting what you did? IaC is *simpler* long-term.

**"We need to move fast, no time for this"**
→ You'll move *faster* with automation. Manual work doesn't scale.

**"We might change cloud providers"**
→ Terraform is cloud-agnostic. And honestly, you probably won't switch.

**"Our infrastructure is too simple"**
→ Perfect! Codify it now while it's simple. Future you will thank you.

## The Bottom Line

Infrastructure as Code isn't about being fancy. It's about:

- Spending less time on infrastructure
- Shipping features faster
- Sleeping better at night

The startups that scale aren't the ones with the most engineers. They're the ones with the best automation.

**Want help implementing IaC for your startup?** We specialize in helping early-stage companies build production-grade infrastructure without slowing down. [Let's talk](/#contact).
    `
  },
  'kubernetes-overkill-or-essential': {
    title: 'Kubernetes for Startups: Overkill or Essential?',
    date: '2024-10-15',
    author: 'Codenest Team',
    readTime: '7 min read',
    tags: ['Kubernetes', 'Cloud Native', 'Startups'],
    content: `
# Kubernetes for Startups: Overkill or Essential?

"Should we use Kubernetes?" is the new "Should we use microservices?"

The answer, as always: **It depends.**

But let me give you a better framework than "it depends."

## When Kubernetes Makes Sense

### You Need It If:

**1. You're Running Multiple Services**

If your architecture looks like this:
- API service
- Background job workers
- Scheduled tasks
- Websocket server
- Admin dashboard

Kubernetes gives you:
- Unified deployment platform
- Service discovery out of the box
- Load balancing between instances
- Easy scaling of individual services

**2. You Have Unpredictable Traffic**

If your load varies by:
- Time of day (10x traffic during business hours)
- Marketing campaigns (sudden spikes)
- Viral growth (exponential user growth)

Kubernetes provides:
- Horizontal pod autoscaling
- Cluster autoscaling (add/remove nodes)
- Resource limits to prevent one service killing others

**3. You Want Zero-Downtime Deployments**

Kubernetes rolling updates mean:
- Deploy new version while old version runs
- Automatic health checks
- Instant rollback if something breaks
- No downtime for users

## When Kubernetes is Overkill

### Skip It If:

**1. You Have a Simple Monolith**

If your stack is:
- Single application
- One database
- Low/steady traffic
- Team of 1-3 engineers

**Better alternatives:**
- Heroku
- Render
- Railway
- AWS Elastic Beanstalk

You get deployments, scaling, and monitoring without the Kubernetes learning curve.

**2. You're Pre-Product/Market Fit**

When you're still validating your idea:
- Infrastructure complexity slows iteration
- You might pivot completely next month
- Simple = fast

**Start with:** Serverless or PaaS. Migrate to Kubernetes when you find PMF.

**3. Your Team Lacks DevOps Experience**

Kubernetes has a steep learning curve:
- Networking concepts (Ingress, Services, NetworkPolicies)
- Storage management (PersistentVolumes, StatefulSets)
- Security (RBAC, Pod Security, Secrets)
- Debugging distributed systems

If you can't dedicate time to learn it properly, you'll spend more time fighting Kubernetes than building features.

## The Middle Ground: Managed Kubernetes

Don't want to manage Kubernetes yourself? Use:

- **Google GKE** – Best Kubernetes experience
- **AWS EKS** – Good AWS integration
- **Azure AKS** – Solid if you're on Azure
- **DigitalOcean Kubernetes** – Simplest, great for startups

Managed services handle:
- Cluster upgrades
- Master node management
- Security patches
- Basic monitoring

You focus on: Deploying your apps.

## Real-World Decision Framework

Ask yourself these questions:

### Question 1: "How many services do we run?"
- **1-2 services** → Probably overkill
- **3-5 services** → Makes sense
- **6+ services** → Definitely use K8s

### Question 2: "How often do we deploy?"
- **Weekly** → Heroku is fine
- **Daily** → K8s helps
- **Multiple times/day** → K8s is essential

### Question 3: "Do we need autoscaling?"
- **No / Steady traffic** → Simple hosting works
- **Yes / Variable load** → K8s shines

### Question 4: "Does anyone on the team know Kubernetes?"
- **No** → Higher risk, budget learning time
- **Yes** → Lower risk, faster ROI

## Our Recommendation for Startups

**Phase 1: MVP (Month 1-6)**
→ Use Heroku, Render, or Railway
→ Focus: Ship fast, find PMF

**Phase 2: Early Growth (Month 6-12)**
→ Move to managed Kubernetes if you have:
  - Multiple services
  - Daily deployments
  - Variable traffic

**Phase 3: Scaling (Year 1+)**
→ Kubernetes + GitOps for:
  - Multiple environments
  - Complex deployments
  - Team collaboration

## What We Use (and Recommend)

For our clients, we typically implement:

\`\`\`yaml
# Simple Kubernetes deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: api
        image: your-api:latest
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: api-service
spec:
  selector:
    app: api-server
  ports:
  - port: 80
    targetPort: 8080
\`\`\`

Plus:
- ArgoCD for GitOps deployments
- Prometheus/Grafana for monitoring
- Cert-manager for SSL certificates
- External-DNS for domain management

## The Bottom Line

Kubernetes isn't about being trendy. It's about:

**Use Kubernetes when the value > the cost**

Value:
- Simplified multi-service deployments
- Reliable autoscaling
- Zero-downtime updates
- Consistent environments

Cost:
- Learning curve
- Operational complexity
- Time to set up properly

For most startups hitting Series A, Kubernetes is the right choice. Before that, it depends on your team's skills and architectural needs.

**Need help deciding?** We help startups architect their infrastructure for growth – whether that's Kubernetes or something simpler. [Book a call](/#contact) and we'll create a roadmap that fits your stage.
    `
  }
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export function generateMetadata({ params }) {
  const post = blogPosts[params.slug]

  return {
    title: `${post.title} – Codenest Blog`,
    description: post.content.substring(0, 160),
  }
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation spacing */}
      <div className="h-20"></div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 bg-accent-100 text-primary-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-slate-600">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate max-w-none
          prose-headings:font-bold prose-headings:text-slate-900
          prose-h1:text-4xl prose-h1:mb-8
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 hover:prose-a:underline
          prose-strong:text-slate-900 prose-strong:font-semibold
          prose-code:text-primary-600 prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl
          prose-ul:my-6 prose-ol:my-6
          prose-li:text-slate-700 prose-li:my-2">
          {/* Convert markdown content to HTML - in production, use a markdown parser like react-markdown */}
          <div dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => {
            // Very basic markdown parsing - in production use a proper library
            if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`
            if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`
            if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`
            if (line.startsWith('**') && line.endsWith('**')) return `<p><strong>${line.substring(2, line.length - 2)}</strong></p>`
            if (line.startsWith('- ')) return `<li>${line.substring(2)}</li>`
            if (line.trim().startsWith('```')) return line.includes('hcl') || line.includes('yaml') ? '<pre><code>' : '</code></pre>'
            if (line.trim() === '') return '<br />'
            return `<p>${line}</p>`
          }).join('\n') }} />
        </div>

        {/* Author CTA */}
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Want help with your infrastructure?
          </h3>
          <p className="text-slate-600 mb-6">
            We help startups build production-grade systems using GitOps, Infrastructure as Code, and cloud-native platforms.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-accent-500 text-primary-900 px-6 py-3 rounded-xl font-semibold hover:bg-accent-600 transition-all"
          >
            Book a Discovery Call
          </a>
        </div>
      </article>

      {/* Comments Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Comments</h2>
        <GiscusComments />
      </section>
    </div>
  )
}
