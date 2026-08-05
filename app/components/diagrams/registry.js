// One diagram per post, keyed by the marker used in the markdown.
//
// A post places `[diagram:name]` on a line of its own; the renderer in
// app/blog/[slug]/page.js swaps it for the entry below. Content files stay free
// of markup, and every diagram is checked against the post's own argument rather
// than decorating it — where a post's point is a table of numbers, the table is
// still the right visual and the diagram shows the mechanism behind it instead.

import { Flow, Cycle, Stack, Split, Timeline, Curve } from './shapes'

export const DIAGRAMS = {
  // ---------------------------------------------------------- technical track

  'gitops-loop': () => (
    <Cycle
      trackName="technical"
      title="The GitOps deployment loop"
      desc="A commit is built and tested by CI, which publishes an image and updates the declared state. A reconciler compares the declared state with the cluster and applies the difference, then keeps watching for drift."
      caption="Nobody deploys by hand, and nobody has production credentials on a laptop. The repository is the only way in, which is also what makes the audit trail free."
      returnLabel="Drift detected: the cluster is pulled back to what the repository says"
      steps={[
        { label: 'Commit', detail: 'Change is reviewed and merged' },
        { label: 'CI builds and tests', detail: 'Fails here, not in production' },
        { label: 'Declared state updated', detail: 'Image tag written to the repo' },
        { label: 'Reconciler applies', detail: 'Cluster matched to the repo' },
      ]}
    />
  ),

  'iac-drift': () => (
    <Split
      trackName="technical"
      title="Console-configured infrastructure versus infrastructure as code"
      desc="Two columns comparing infrastructure changed by hand in a cloud console against infrastructure declared in version-controlled code."
      caption="The difference that matters in diligence is not elegance. It is whether the answer to 'can you rebuild this' is a demonstration or a promise."
      columns={[
        {
          label: 'Configured by hand',
          items: [
            'The current state lives only in the console',
            'Changes are unreviewed and unlogged',
            'Environments drift apart quietly',
            'Rebuilding means remembering',
            'One person knows how it was set up',
          ],
        },
        {
          label: 'Declared in code',
          emphasis: true,
          items: [
            'The repository is the state',
            'Every change is a reviewed commit',
            'Environments are built the same way',
            'Rebuilding is running the code again',
            'The knowledge outlives the person',
          ],
        },
      ]}
    />
  ),

  'kubernetes-ladder': () => (
    <Flow
      trackName="technical"
      title="The hosting ladder, cheapest rung first"
      desc="Four hosting options in ascending order of operational cost: a single virtual machine, a managed platform, managed containers, and Kubernetes."
      caption="Most startups are two rungs below where they think they need to be. Each step up buys capability and costs operational attention that has to come from somewhere."
      steps={[
        { label: 'One virtual machine', detail: 'Fine further than teams admit' },
        { label: 'Managed platform', detail: 'Deploys, scaling, TLS included' },
        { label: 'Managed containers', detail: 'Images without a control plane' },
        { label: 'Kubernetes', detail: 'Earned by a real constraint' },
      ]}
    />
  ),

  'terraform-tools': () => (
    <Split
      trackName="technical"
      title="The four infrastructure-as-code tools, and what each is for"
      desc="Four columns describing Terraform, OpenTofu, AWS CDK and CloudFormation, with the situation each one suits."
      caption="The tool matters far less than having one. A team fluent in the second-best option ships more safely than a team learning the best one during a raise."
      columns={[
        { label: 'Terraform', emphasis: true, items: ['The default', 'Largest talent pool', 'Works across clouds', 'Licence changed in 2023'] },
        { label: 'OpenTofu', items: ['Open-source fork', 'Same language', 'Community governed', 'Drop-in for most uses'] },
        { label: 'AWS CDK', items: ['Real code, not config', 'Suits strong AWS teams', 'Compiles to CloudFormation', 'Steeper to review'] },
        { label: 'CloudFormation', items: ['AWS-native', 'No extra tooling', 'Verbose to write', 'AWS only, permanently'] },
      ]}
    />
  ),

  'tech-dd-layers': () => (
    <Stack
      trackName="technical"
      title="What technical due diligence inspects"
      desc="Five layers examined in technical due diligence, from the team and process at the top down through security, infrastructure, and the codebase itself."
      footnote="Read top-down: reviewers start with the people and the process, because those predict everything below."
      caption="Almost nothing here is fixable in the fortnight before a raise. That is the argument for doing it while nobody is asking."
      layers={[
        { label: 'Team and process', detail: 'Who knows what, and what happens when they leave' },
        { label: 'Delivery and release', detail: 'How a change reaches production, and how it is reversed' },
        { label: 'Security and compliance', detail: 'Access, secrets, data handling, UK GDPR position' },
        { label: 'Infrastructure', detail: 'Reproducible, monitored, and costed' },
        { label: 'Codebase', detail: 'Tests, dependencies, documentation, licences' },
      ]}
    />
  ),

  'mvp-vs-mlp': () => (
    <Split
      trackName="technical"
      title="MVP, MLP, and the hybrid between them"
      desc="Three columns comparing a minimum viable product, a minimum lovable product, and the hybrid approach of a narrow scope built well."
      caption="The real choice is not scope against quality. It is which single thing you are testing: whether anyone wants it, or whether they will stay."
      columns={[
        { label: 'MVP', items: ['Tests whether anyone wants it', 'Narrow, rough, fast', 'Weeks', 'Risk: nobody stays'] },
        { label: 'MLP', items: ['Tests whether they will stay', 'Narrow, finished, slower', 'Months', 'Risk: nobody wanted it'] },
        { label: 'Hybrid', emphasis: true, items: ['One job, done properly', 'Everything else deferred', 'Weeks, not months', 'The usual right answer'] },
      ]}
    />
  ),

  'hiring-options': () => (
    <Split
      trackName="technical"
      title="Employees, contractors and agencies compared"
      desc="Three columns comparing hiring employees, engaging contractors, and using an agency, across cost, control, speed and the knowledge that remains afterwards."
      caption="The question is not which is cheapest per day. It is who still understands the system in a year."
      columns={[
        { label: 'Employees', emphasis: true, items: ['Slowest to hire', 'Knowledge stays', 'Full employment cost', 'Right for the core product'] },
        { label: 'Contractors', items: ['Fast to start', 'Knowledge leaves with them', 'Higher day rate', 'Right for defined gaps'] },
        { label: 'Agencies', items: ['Fastest to capacity', 'Least context retained', 'Highest total cost', 'Right for a bounded build'] },
      ]}
    />
  ),

  'fractional-to-fulltime': () => (
    <Timeline
      trackName="technical"
      axisLabel="A typical path from first technical leadership to a permanent hire"
      title="The path from fractional to full-time technical leadership"
      desc="A timeline showing a startup engaging a fractional CTO, growing the team, defining the permanent role, and handing over to a full-time hire."
      caption="The handover is the point, not the failure. A fractional engagement that ends in a good permanent hire has done its job."
      points={[
        { label: 'Pre-seed', detail: 'Decisions outpace in-house judgement' },
        { label: 'Fractional CTO', detail: 'Architecture, hiring, diligence prep' },
        { label: 'Team grows', detail: 'Engineers need a full-time manager' },
        { label: 'Role defined', detail: 'Written with the person leaving it' },
        { label: 'Full-time CTO', detail: 'Inherits a documented system' },
      ]}
    />
  ),

  'cto-triggers': () => (
    <Timeline
      trackName="technical"
      axisLabel="The seven signals, roughly in the order founders meet them"
      title="Seven signals a startup needs a fractional CTO"
      desc="A timeline of seven triggers: making technical decisions without technical judgement, developers without direction, fundraising, spiralling costs, affordability, scaling the team, and needing someone in the room."
      caption="One of these is a bad week. Three at once is a structural gap, and it does not close on its own."
      points={[
        { label: 'Deciding blind', detail: 'No way to evaluate the choice' },
        { label: 'Coders, no direction', detail: 'Good engineers, no owner' },
        { label: 'Raise approaching', detail: 'Diligence has no answers' },
        { label: 'Costs spiralling', detail: 'Spend with no visible return' },
        { label: 'Scaling the team', detail: 'Nobody to interview engineers' },
      ]}
    />
  ),

  'cto-cost-tiers': () => (
    <Split
      trackName="technical"
      title="How fractional CTO engagements are usually priced in the UK"
      desc="Three columns describing light-touch advisory, core fractional leadership, and intensive delivery engagements, with the commitment and the work each covers."
      caption="Market shapes, not our price list. What an engagement costs depends on the intensity it actually needs, and that is a conversation rather than a tier."
      columns={[
        { label: 'Light touch', items: ['A day or two a month', 'Architecture review', 'Hiring input', 'Someone to ask'] },
        { label: 'Core', emphasis: true, items: ['Two to three days a week', 'Owns the technical plan', 'Leads the engineers', 'The common shape'] },
        { label: 'Intensive', items: ['Close to full-time', 'A build or a migration', 'Fixed scope preferred', 'Steps down after'] },
      ]}
    />
  ),

  // ---------------------------------------------------------- financial track

  'three-statement-model': () => (
    <Stack
      trackName="financial"
      title="How the three statements connect in a financial model"
      desc="A three-statement model: the profit and loss feeds the balance sheet, which feeds the cash flow statement, and the closing cash balance returns to the balance sheet."
      footnote="Read bottom-up: cash is the output, and it is the only one that can end the company."
      caption="A model where the three do not tie is not a conservative model. It is an arithmetic error that an investor will find in the first hour."
      layers={[
        { label: 'Cash flow', detail: 'What actually moved, and when the balance hits zero' },
        { label: 'Balance sheet', detail: 'What you own and owe at a point in time' },
        { label: 'Profit and loss', detail: 'Revenue, cost of sales, operating cost' },
        { label: 'Assumptions', detail: 'Pricing, conversion, hiring plan, churn' },
      ]}
    />
  ),

  'cac-payback': () => (
    <Curve
      trackName="financial"
      title="Contribution from one customer against the cost of acquiring them"
      desc="A curve showing cumulative contribution from a single customer starting negative at the point of acquisition, crossing zero at payback, and continuing upward as lifetime value accrues."
      caption="Payback is when the customer has repaid what they cost to win. Everything after it is the business; everything before it is funded by someone."
      xLabel="Months since acquisition"
      yLabel="Cumulative contribution"
      series={[
        {
          label: 'Cumulative contribution',
          points: [[0, -100], [3, -55], [6, -10], [8, 20], [12, 80], [18, 170], [24, 260]],
        },
      ]}
      markers={[
        { label: 'Acquisition cost', at: [0, -100] },
        { label: 'Payback', at: [7, 0] },
      ]}
    />
  ),

  'runway-levers': () => (
    <Curve
      trackName="financial"
      title="Cash balance before and after acting on runway"
      desc="Two lines showing a cash balance falling to zero at month eight on the original burn, and the same balance extended past month eighteen after cost and revenue changes."
      caption="The levers are the same three every time: spend less, earn sooner, or raise. The one thing that never works is waiting to see whether it improves."
      xLabel="Months from today"
      yLabel="Cash remaining"
      series={[
        { label: 'Unchanged burn', muted: true, dashed: true, points: [[0, 800], [2, 600], [4, 400], [6, 200], [8, 0]] },
        { label: 'After the levers', points: [[0, 800], [3, 680], [6, 570], [9, 470], [12, 380], [15, 300], [18, 230]] },
      ]}
      markers={[{ label: 'Cash out', at: [8, 0] }]}
    />
  ),

  'data-room-structure': () => (
    <Stack
      trackName="financial"
      title="How an investor data room is organised"
      desc="A data room in five sections: corporate records, financials, commercial contracts, product and technology, and team, ordered by the sequence an investor works through them."
      footnote="Numbered folders, so the order survives whatever the reader's file browser decides to do."
      caption="The structure is not aesthetic. An investor who cannot find a document assumes it does not exist, and that assumption is expensive."
      layers={[
        { label: '01 Corporate', detail: 'Incorporation, cap table, share history, board minutes' },
        { label: '02 Financials', detail: 'Accounts, management reporting, the model, tax' },
        { label: '03 Commercial', detail: 'Customer contracts, pipeline, key suppliers' },
        { label: '04 Product and technology', detail: 'Architecture, roadmap, IP, security posture' },
        { label: '05 Team', detail: 'Contracts, option agreements, key-person cover' },
      ]}
    />
  ),

  'dd-process': () => (
    <Timeline
      trackName="financial"
      axisLabel="From term sheet to completion, typically four to twelve weeks"
      title="The due diligence process, from term sheet to completion"
      desc="A timeline running from term sheet through data room access, functional review across finance, legal, technical and commercial, question rounds, reference calls, and completion."
      caption="The timetable is set by how fast you answer, not by how fast they ask. A data room built in advance is the whole difference."
      points={[
        { label: 'Term sheet', detail: 'Non-binding, and the clock starts' },
        { label: 'Data room opens', detail: 'Everything they will ask for' },
        { label: 'Functional review', detail: 'Finance, legal, technical, commercial' },
        { label: 'Questions', detail: 'Rounds of follow-ups, often several' },
        { label: 'Completion', detail: 'Conditions met, funds released' },
      ]}
    />
  ),

  'cfo-roles-split': () => (
    <Split
      trackName="financial"
      title="Accountant, financial controller and fractional CFO"
      desc="Three columns separating the accountant's compliance work, the controller's operational reporting, and the fractional CFO's forward-looking decisions."
      caption="These are three jobs, not three seniorities of one job. Asking an accountant for a pricing strategy is a category error, and it is the most common one."
      columns={[
        { label: 'Accountant', items: ['Looks backwards', 'Statutory accounts and tax', 'Compliance is the deliverable', 'Needed from day one'] },
        { label: 'Controller', items: ['Looks at now', 'Month-end close, controls', 'Accuracy is the deliverable', 'Needed as volume grows'] },
        { label: 'Fractional CFO', emphasis: true, items: ['Looks forwards', 'Model, pricing, runway, raise', 'A decision is the deliverable', 'Needed when decisions carry cost'] },
      ]}
    />
  ),

  'cfo-triggers': () => (
    <Timeline
      trackName="financial"
      axisLabel="The seven signals, roughly in the order founders meet them"
      title="Seven signals a startup needs a fractional CFO"
      desc="A timeline of triggers: an approaching raise, unanswerable unit-economics questions, no cash model, board reporting becoming a burden, pricing set by instinct, and post-raise discipline."
      caption="Any one of these is survivable. The pattern they make is a finance function you do not have yet."
      points={[
        { label: 'Raise in 6-12 months', detail: 'Diligence starts before you do' },
        { label: 'Unit economics unclear', detail: 'No answer to what a customer earns' },
        { label: 'No cash model', detail: 'Runway rebuilt from scratch each time' },
        { label: 'Board pack is a burden', detail: 'Assembled the night before' },
        { label: 'Pricing on instinct', detail: 'Margin drifting, nobody watching' },
      ]}
    />
  ),

  'cfo-cost-tiers': () => (
    <Split
      trackName="financial"
      title="How fractional CFO engagements are usually priced in the UK"
      desc="Three columns describing light-touch advisory, core fractional finance leadership, and raise-intensity engagements, with the commitment and work each covers."
      caption="Market shapes, not our price list. The right intensity depends on what is happening in the next two quarters, which is a conversation rather than a tier."
      columns={[
        { label: 'Light touch', items: ['A day or two a month', 'Model review', 'Board pack sanity check', 'Someone to ask'] },
        { label: 'Core', emphasis: true, items: ['Two to three days a week', 'Owns the model and reporting', 'Pricing and margin', 'The common shape'] },
        { label: 'Raise intensity', items: ['Heavier for a fixed window', 'Data room and diligence', 'Investor Q&A', 'Steps down after close'] },
      ]}
    />
  ),

  'seis-eis': () => (
    <Split
      trackName="financial"
      title="SEIS and EIS compared"
      desc="Two columns comparing the Seed Enterprise Investment Scheme and the Enterprise Investment Scheme, across company age, size limits, investment limits and investor relief."
      caption="Most companies use SEIS first and EIS afterwards. Taking them in the wrong order, or taking other money in between, can disqualify the round you actually needed."
      columns={[
        { label: 'SEIS', emphasis: true, items: ['Youngest companies', 'Tightest limits', 'Highest investor relief', 'Usually the first round'] },
        { label: 'EIS', items: ['Larger and older companies', 'Higher limits', 'Lower relief than SEIS', 'Usually what follows'] },
      ]}
    />
  ),

  'ai-finance-boundary': () => (
    <Split
      trackName="financial"
      title="Where AI helps in a finance function, and where it must not decide"
      desc="Two columns separating finance tasks an AI assistant does well from tasks where a human must remain accountable, such as filings, judgement calls and anything an auditor will test."
      caption="The line is accountability, not capability. Anything a regulator, an auditor or a board will hold a person to, a person signs."
      columns={[
        {
          label: 'Does well',
          emphasis: true,
          items: ['Drafting the commentary', 'Reconciling and categorising', 'Summarising long contracts', 'First-pass variance analysis', 'Rewriting a board pack'],
        },
        {
          label: 'Must not decide',
          items: ['Anything filed with HMRC', 'Judgement on accounting treatment', 'Numbers nobody has checked', 'Client data in a public tool', 'What the board is told'],
        },
      ]}
    />
  ),
}

export function getDiagram(name) {
  return DIAGRAMS[name]
}
