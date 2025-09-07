const services = [
  {
    id: 1,
    title: 'IT Consulting',
    icon: 'fa-cogs',
    subheading: 'Practical, vendor‑neutral advice that turns technology into measurable outcomes.',
    overview:
      'At Starkville Tech, we assist leadership teams in translating business goals into clear, actionable technology strategies. From current-state assessments to multi-year roadmaps, we provide decision-ready guidance to help your investments improve performance, reduce risk, and drive growth.',
    whoWeServe:
      'Executives and IT leaders in government, regulated industries, and small‑to‑medium businesses who need clarity, prioritization, and a credible plan.',
    outcomes: [
      'A fit-for-purpose technology roadmap aligned to business objectives and budgets',
      'Rationalized application and vendor portfolios with cost/benefit analysis',
      'Clear governance, KPIs/OKRs, and operating model for delivery and accountability',
      'Risk‑reduction actions across security, continuity, and compliance'
    ],
    coreCapabilities: [
      'Enterprise & Solution Architecture: state mapping, integration patterns, TOGAF‑aligned reference architectures',
      'Technology Strategy & Roadmapping: prioritization models, value cases, sequences, funding paths',
      'IT Financial Management: TCO models, ROI analysis, cost transparency, FinOps',
      'Cyber & Risk Strategy: control mapping to NIST/ISO, risk registers, remediation plans',
      'Data & Analytics Strategy: governance, platforms, analytics pipeline, data governance',
      'Sourcing & Vendor Management: RFP support, build/buy decisions, SLAs, contract governance',
      'Operating Model & Governance: ITIL base, service catalogs, KPIs/OKRs'
    ],
    approach: [
      'Discover — stakeholder interviews, document reviews, environment scans',
      'Diagnose — maturity assessment, heatmapping, dependency analysis',
      'Design — target state, options analysis, roadmap, investment profile',
      'Deliver — governance setup, KPI dashboards, PMO handoff'
    ],
    deliverables: [
      'Executive brief and prioritized roadmap',
      'Architecture diagrams and integration patterns',
      'Investment case (ROI/TCO) and risk register',
      'Operating model, RACI, and KPI pack'
    ],
    cta: 'Book a strategy session →',
    image: '/images/IT Ops.jpg',
  },
  {
    id: 2,
    title: 'Digital & Business Transformation',
    icon: 'fa-robot',
    subheading: 'Human‑centered change that delivers measurable, enterprise‑wide impact.',
    overview:
      'Transformation succeeds when strategy, process, people, and technology move together. We help you redesign services, streamline processes, and deploy digital platforms—while building the capabilities and culture to sustain change.',
    whoWeServe: 'Organizations seeking modernization through design thinking, process efficiency, and digital enablement.',
    outcomes: [
      '20–40% cycle‑time reductions in priority processes',
      'Improved customer/constituent satisfaction (CSAT, NPS)',
      'Digitized end‑to‑end journeys with fewer handoffs and errors',
      'Change adoption with training and communications that stick'
    ],
    coreCapabilities: [
      'Service & Experience Design: journey mapping, blueprints, accessible-by-design',
      'Process Re‑engineering: Lean/Six Sigma, policy simplification, automation scoping',
      'Platform Enablement: low‑code, CRM/Case, ERP, CMS, integration design',
      'Change & Adoption: stakeholder mapping, impact analysis, training',
      'Data‑Driven Decisioning: KPI frameworks, dashboards, continuous improvement',
      'Governance & Controls: security/privacy/AI guardrails'
    ],
    approach: [
      'Discover & Prioritize — define value cases and metrics',
      'Design & Pilot — co-create digital journeys, pilot quickly',
      'Scale & Embed — build transformation office, playbooks, KPIs',
      'Sustain — hand-off with change capability and coaching'
    ],
    deliverables: [
      'Transformation roadmap and benefits case',
      'Target operating model (TOM) and change plan',
      'Experience blueprints and process maps',
      'KPI dashboard and runbook'
    ],
    cta: 'Start your transformation assessment →',
    image: '/images/Image_fx (58).jpg',
  },
  {
    id: 3,
    title: 'Cloud Management',
    icon: 'fa-laptop',
    subheading: 'Architecture, migration, and day‑2 operations for major cloud platforms.',
    overview:
      'We design, deploy, and operate cloud environments tailored to your security, compliance, performance, and budget requirements—across public, private, and hybrid models.',
    whoWeServe: 'Enterprises adopting cloud and needing strategy, stability, compliance, and cost control.',
    outcomes: [
      'Right‑sized, policy‑compliant landing zones and guardrails',
      '15–30% cost optimization through FinOps practices',
      'Improved reliability via automation, monitoring, and resilience patterns'
    ],
    coreCapabilities: [
      'Cloud Strategy & Architecture: landing zones, networking, identity design',
      'Migration & Modernization: assessment, factory‑style migration, data cutover',
      'Security & Compliance: policy-as‑code, identity, encryption, logging, vulnerability',
      'Day‑2 Operations: monitoring, backup/DR, patching, performance tuning',
      'FinOps & Cost Control: budgets, tagging, showback, autoscaling',
      'Hybrid/Multi‑Cloud: connectivity, workload placement, portability'
    ],
    approach: [
      'Plan — business case, environment readiness, landing zone design',
      'Move — automated migration delivery with cutover plans',
      'Run — SRE‑style ops, SLIs/SLOs, continuous cost control'
    ],
    deliverables: [
      'Architecture and security design docs',
      'Migration runbooks and cutover plan',
      'Operations handbook, SLAs/SLOs, cost dashboard'
    ],
    cta: 'Request a cloud readiness review →',
    image: '/images/Cloud Management.jpg',
  },
  {
    id: 4,
    title: 'IT Operations',
    icon: 'fa-shield-alt',
    subheading: 'ITIL‑aligned processes, modern tooling, and a customer‑first service desk.',
    overview:
      'We build and run scalable IT operations that keep your organization productive and protected. From service desk to vendor management and observability, we combine process rigor with automation and a strong customer experience focus.',
    whoWeServe: 'Organizations needing reliable IT support, observability, and efficient ITSM practices.',
    outcomes: [
      'Faster incident resolution and fewer recurring problems',
      'Predictable change management and higher deployment success',
      'Clear SLAs, service catalogs, and performance visibility'
    ],
    coreCapabilities: [
      'Service Desk & Field Services: tooling, staffing, knowledge portals',
      'ITSM Processes: incident/request/problem/change/asset management, release, service catalog',
      'Observability & SRE: logging, metrics, tracing, error budgets, on‑call',
      'Endpoint & Platform Management: patching, configuration, compliance',
      'Vendor & Contract Management: sourcing, SLA tracking, governance',
      'Experience Management: CSAT/NPS, XLAs, journey improvements'
    ],
    approach: [
      'Assess — evaluate current state, knowledge base gaps',
      'Stabilize — implement incident & change pipelines, self‑service',
      'Modernize — add tooling, automation, dashboards',
      'Optimize — run reviews, metrics, continuous improvement cadence'
    ],
    deliverables: [
      'ITSM playbooks and runbooks',
      'Service catalog and SLA/XLA pack',
      'Operations dashboard and review cadence'
    ],
    cta: 'Talk to us about your IT operations goals →',
    image: '/images/IT Ops.jpg',
  },
  {
    id: 5,
    title: 'Project & Program Management',
    icon: 'fa-project-diagram',
    subheading: 'Governance, methods, and leadership to deliver complex initiatives on time and on budget.',
    overview:
      'We provide hands‑on delivery leadership across projects and portfolios. Our PMs and program leads combine Agile and traditional methods to manage risk, align stakeholders, and realize benefits.',
    whoWeServe: 'Organizations pursuing multi-project programs, Agile transformations, or delivery maturity and oversight.',
    outcomes: [
      'Transparent plans, budgets, and risks with proactive course correction',
      'Consistent delivery cadence and clear stakeholder communications',
      'Measurable benefits tracked beyond go‑live'
    ],
    coreCapabilities: [
      'Project Delivery: planning, scheduling, RAID, vendor coordination',
      'Program & Portfolio Management: prioritization, funding, governance forums, stage gates',
      'Agile Delivery: Scrum/Kanban, product ownership, backlog, PI planning',
      'Benefits Realization: KPIs/OKRs, value tracking, post‑implementation review',
      'Quality & Compliance: change control, documentation, audit readiness'
    ],
    approach: [
      'Establish governance & reporting channels',
      'Build integrated plan & delivery cadence',
      'Drive execution with data‑driven decision logs',
      'Transition to operations with playbooks & documentation'
    ],
    deliverables: [
      'Charter, plan, budget, risk register',
      'Status dashboards and comms pack',
      'Benefits register and lessons learned toolkit'
    ],
    cta: 'Get delivery leadership for your next initiative →',
    image: '/images/Project Mgt.jpg',
  },
  {
    id: 6,
    title: 'AI & Process Automation',
    icon: 'fa-brain',
    subheading: 'From quick‑win automations to enterprise AI platforms with governance.',
    overview:
      'We help organizations automate manual work, improve decisions, and unlock new value with AI—safely and pragmatically. We start with high‑ROI use cases, build secure integrations, and set up governance for responsible AI.',
    whoWeServe: 'Enterprises looking to deploy safe, scalable AI and automation with oversight and impact.',
    outcomes: [
      'Intelligent Document Processing, virtual assistants, RPA flows',
      'Predictive forecasting and anomaly detection in operations'
    ],
    coreCapabilities: [
      'Automation Factory: idea intake, reuse, CoE setup',
      'Model Lifecycle (MLOps): pipelines, versioning, monitoring',
      'Integration & Security: APIs, access control, auditing',
      'AI Governance: bias checks, human‑in‑loop, policy documentation',
      'Change & Adoption: training, comms, support'
    ],
    approach: [
      'Identify — rapid discovery to surface high‑value use cases',
      'Prove — prototype pilot within weeks, measure outcomes',
      'Scale — integrate and harden selected automations',
      'Govern — embed monitoring, controls, continuous improvement'
    ],
    deliverables: [
      'Use‑case portfolio and value model',
      'Working prototypes/pilots with KPIs',
      'Production runbooks, dashboards, governance artifacts'
    ],
    cta: 'Explore your first three automation candidates →',
    image: '/images/AI & Process.jpg',
  },
  {
    id: 7,
    title: 'Business Continuity',
    icon: 'fa-sync-alt',
    subheading: 'Design, testing, and execution to keep critical services running through disruption.',
    overview:
      'From cyber incidents to severe weather, disruptions are inevitable. We design and implement business continuity and disaster recovery (BC/DR) capabilities to protect your people, data, and critical services.',
    whoWeServe: 'Organizations requiring operational resilience, RTO/RPO planning, and incident readiness.',
    outcomes: [
      'Defined RTO/RPO targets with documentation',
      'Tested recovery procedures with clear roles & communications',
      'Resilience patterns like HA, backup/restore, failover'
    ],
    coreCapabilities: [
      'Business Impact Analysis: process mapping, dependencies, impact levels',
      'Risk Assessment & Mitigation: threat modeling, controls, response playbook',
      'Continuity & DR Planning: runbooks, communication scripts, escalations',
      'Exercises & Testing: table‑tops, technical failovers, after‑action analysis',
      'Operational Readiness: training, metrics, governance cadence'
    ],
    approach: [
      'Assess — evaluate current resilience gaps',
      'Design — craft BC/DR strategies and runbooks',
      'Implement — deploy procedures and train teams',
      'Test — conduct drills and adapt',
      'Improve — embed into operations and monitoring'
    ],
    deliverables: [
      'BIA report and prioritized recovery portfolio',
      'Continuity plans and DR runbooks',
      'Exercise playbooks and after‑action reports',
      'Resilience dashboard with RTO/RPO tracking'
    ],
    cta: 'Schedule a continuity and DR readiness review →',
    image: '/images/Business Continuity.jpg',
  },
];

export default services;
