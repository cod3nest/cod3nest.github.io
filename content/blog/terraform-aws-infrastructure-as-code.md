---
title: 'AWS Infrastructure for Startups: What Founders Actually Need to Decide'
seoTitle: 'AWS Infrastructure for Startups: Founder Guide'
description: 'A non-technical guide to infrastructure decisions: what to spend at each stage, which tool your team should pick, and the five questions to ask your engineers.'
date: '2025-11-07'
updated: '2026-08-05'
author: 'Ankit Rana'
readTime: '9 min read'
tags: ['AWS', 'Infrastructure', 'Non-Technical Founders']
---

# AWS Infrastructure for Startups: What Founders Actually Need to Decide

Your AWS bill has started climbing. Someone on the team wants time to "sort out the infrastructure", and the words that follow are Terraform, CloudFormation, CDK and Pulumi. You have no way to judge whether this is a genuine need or an engineer's preference dressed up as urgency.

That judgement is the point of this guide. It assumes no technical background. It will not teach you to write infrastructure code, because you should never need to. It will tell you what the decision costs, what happens if you get it wrong in either direction, and what to ask the people who will do the work.

## The Only Question That Matters at Your Stage

Founders ask which tool is best. The useful question is how much infrastructure maturity your company needs right now, because the answer changes completely between stages.

| Stage | Typical AWS spend | What the infrastructure should be |
|---|---|---|
| Pre-seed | £0-500/month | A managed platform. No infrastructure project at all. |
| Seed | £500-3k/month | Core pieces written down as code, two environments |
| Series A | £3k-15k/month | Everything as code, automated, multiple environments |
| Series B+ | £15k+/month | The above, plus deliberate cost management |

Both directions of error are expensive. Infrastructure built for a fifteen-person Series A team will consume months of a three-person pre-seed team's runway and deliver nothing a customer can see. Infrastructure built for three people will start failing a fifteen-person team in ways that surface as outages, blocked releases, and engineers waiting on each other.

The failure mode is rarely the tool. It is the mismatch between the setup and the stage.

## What "Infrastructure as Code" Means If You Have Never Seen It

Two ways exist to create the servers and databases your product runs on.

The first is clicking through the AWS website, filling in forms. It works, it is fast the first time, and it leaves no record. What exists, who created it and why are held in one engineer's memory.

The second is writing it down in a text file that a tool reads and applies. The file lives in the same place as your product code, changes go through the same review, and the whole environment can be rebuilt from it.

Here is what that file looks like. You do not need to read it closely, and that is the point:

```terraform
resource "aws_db_instance" "main" {
  identifier        = "myapp-production"
  engine            = "postgres"
  instance_class    = "db.t3.medium"
  allocated_storage = 100

  backup_retention_period = 7
  multi_az                = true
}
```

That is the production database. Anyone on the team can see it exists, that it keeps seven days of backups, and that it runs in two locations so a single failure does not take the product down. Changing it means a change to this file that another engineer reviews before it happens.

The commercial translation: **the infrastructure stops being knowledge that can walk out of the door.** That is a governance property, and it is why the topic reaches you rather than staying with the engineering team. Our post on [why infrastructure as code matters in due diligence](/blog/infrastructure-as-code-for-startups/) covers the diligence angle in more depth.

## The Four Tools, and the Answer

Your team will name four options. Here is what each is, in commercial terms.

| Tool | What it is | Where it fits |
|---|---|---|
| **Terraform** | The industry standard. Works with any cloud provider. | The default for most startups. Largest talent pool, most documentation. |
| **CloudFormation** | Amazon's own version, built into AWS. | Fine if you are certain you will stay on AWS. Fewer engineers know it well. |
| **CDK** | Amazon's version, written in a normal programming language. | Suits strong developer teams. Tends toward over-engineering without discipline. |
| **Pulumi** | Like CDK, but works across providers. | Only if you have a genuine multi-cloud requirement. |

**For almost every UK startup pre-seed to Series A, the answer is Terraform.** The reasoning is about hiring rather than technical merit. Terraform is what the most engineers already know, what the most documentation covers, and what a new contractor or hire can pick up on day one without a handover. The others are defensible choices; none of them is defensible *enough* to justify a smaller pool of people who can maintain the result.

Two answers should prompt a follow-up conversation. If someone proposes Pulumi, ask which second cloud provider you are actually planning to use, because that is the reason it exists. If someone proposes CDK, ask how the team will stop it becoming a bespoke framework only its author understands.

None of this is worth a long debate. A team using Terraform reasonably will beat a team debating tools for three weeks.

## What to Spend, by Stage

### Pre-seed: spend nothing on this

Use a managed platform such as Heroku, Railway or Render, or a simple setup created through the AWS console. Keep a one-page note of what exists.

Every hour on infrastructure at this stage is an hour not spent finding out whether anyone wants the product. Your requirements will change beyond recognition once you do. If an engineer proposes an infrastructure project pre-seed, the answer is almost always not yet.

### Seed: a contained piece of work

Once you have paying customers and something worth protecting, the goal is reproducibility. Write down the pieces you could not survive losing, usually the database, the network and file storage. Set up two environments so changes get tested before customers see them. Prefer managed services, where Amazon runs the thing for you, over anything your team has to maintain themselves.

Expect this to take a competent engineer one to two weeks. If the estimate comes back in months, the scope has grown beyond what your stage needs, and it is worth asking what would be cut to reach two weeks.

### Series A: the real investment

With more engineers, manual infrastructure becomes the bottleneck that shows up as slow releases. Everything is written down, changes deploy automatically after review, environments are separated, and access is restricted to named people.

This is also the stage where technical due diligence starts examining it seriously. Our [technical due diligence checklist](/blog/startup-technical-due-diligence-checklist/) covers what gets looked at.

## Five Questions to Ask Your Engineering Lead

You do not have to evaluate the work. You do have to ask questions whose answers you can judge.

**1. If our AWS account were deleted tonight, how long until we are running again, and how do you know?**

A good answer is a number of hours, and evidence that someone has tested it. A bad answer describes a process nobody has ever run. This single question surfaces most of what matters.

**2. Who can change production, and what stops an accident?**

You want a small number of named people and a review step before changes apply. "Everyone has access" is a real risk, and it is one an investor will find.

**3. Where are our passwords and keys stored?**

The correct answer names a secrets manager. If the answer is that they sit in the code, in a spreadsheet or in a chat history, that is a security incident waiting to be discovered, and it needs fixing this month.

**4. What did we spend on AWS last month, and which part of the product caused it?**

Not knowing the second half is the common case, and it is how a bill triples quietly. Cost visibility is finance infrastructure as much as engineering infrastructure.

**5. What would break first if we tripled our customers tomorrow?**

Any engineer who knows the system can answer this immediately. Hesitation tells you nobody has looked.

## The Five Red Flags in Diligence

Technical due diligence asks the same questions in a more formal register. These are the answers that cost you.

| Area | What passes | What gets flagged |
|---|---|---|
| How infrastructure is defined | It is written down and version-controlled | One person set it up by hand |
| Disaster recovery | A tested recovery time | Nobody has tried |
| Making changes | Reviewed, then applied automatically | People change things directly in the console |
| Access control | A short list of named admins | Shared credentials |
| Cost | Spend tracked by service | The bill is a monthly surprise |

None of these require sophisticated infrastructure. They require ordinary infrastructure that somebody wrote down. A diligence process is far more interested in whether your engineering practice is repeatable than in whether your architecture is clever.

## If You Have None of This Today

Nothing here needs converting overnight, and a big-bang infrastructure rewrite is its own risk.

A reasonable sequence for one engineer, roughly a month of part-time work:

1. Write down the database first. It is the resource whose loss would end the company.
2. Add the network and access rules around it.
3. Move passwords and keys into a secrets manager.
4. Connect it to your deployment pipeline so changes go through review.

Then stop. Whatever remains is a candidate for later, and most of it will still be waiting a year from now without anyone noticing, which tells you it was correctly deprioritised.

## The Bottom Line

Infrastructure tooling is a stage decision wearing technical clothing. Pre-seed, the right amount of investment is close to zero. At seed, it is a contained two-week job on the pieces you cannot lose. By Series A, it is the difference between an engineering team that ships and one that queues.

Pick Terraform unless someone gives you a specific reason otherwise, keep the setup as simple as your stage allows, and use the five questions above to check in twice a year. That is the whole of the founder's job here.

If you want to know whether your current setup is stage-appropriate, [Kubernetes: overkill or essential?](/blog/kubernetes-startups-overkill-essential/) applies the same test to the other decision founders get talked into early.

---

*Not sure whether your infrastructure is a risk or a distraction? Our [Fractional CTO service](/services/fractional-cto/) covers architecture, infrastructure and due diligence readiness, or [get in touch](/contact/) to talk through your situation.*
