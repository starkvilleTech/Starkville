import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ServiceDetail.css';
import 'font-awesome/css/font-awesome.min.css';

const services = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
  {
    id: 7,
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
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const service = services.find((s) => s.id === parseInt(serviceId));

  useEffect(() => {
    
    setIsVisible(true);
    
    
    window.scrollTo(0, 0);
  }, []);

  if (!service) return <div className="service-not-found">Service not found!</div>;

  return (
    <div className={`service-detail-wrapper ${isVisible ? 'visible' : ''}`}>
      <div className="glass-card">
        <div className="service-top-bar">
          <button className="back-button" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-left"></i> Back to Services
          </button>
          <div className="icon-container">
            <i className={`fa ${service.icon} service-icon`}></i>
          </div>
        </div>

        <div className="service-header">
          <h1 className="service-title">{service.title}</h1>
          <p className="service-subheading">{service.subheading}</p>
          <div className="accent-line"></div>
        </div>

        <div className="info-sections">
          <div className="info-section fade-in">
            <div className="section-header">
              <i className="fa fa-eye"></i>
              <h3>Overview</h3>
            </div>
            <p>{service.overview}</p>
          </div>

          <div className="info-section fade-in">
            <div className="section-header">
              <i className="fa fa-users"></i>
              <h3>Who We Serve</h3>
            </div>
            <p>{service.whoWeServe}</p>
          </div>

          <div className="info-section fade-in">
            <div className="section-header">
              <i className="fa fa-chart-line"></i>
              <h3>Typical Outcomes</h3>
            </div>
            <ul>
              {service.outcomes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-section fade-in">
            <div className="section-header">
              <i className="fa fa-star"></i>
              <h3>Core Capabilities</h3>
            </div>
            <ul>
              {service.coreCapabilities.map((cap, i) => (
                <li key={i}>{cap}</li>
              ))}
            </ul>
          </div>

          <div className="info-section fade-in">
            <div className="section-header">
              <i className="fa fa-road"></i>
              <h3>Our Approach</h3>
            </div>
            <ol>
              {service.approach.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="info-section fade-in">
            <div className="section-header">
              <i className="fa fa-truck"></i>
              <h3>Deliverables</h3>
            </div>
            <ul>
              {service.deliverables.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>

        <button 
          className="cta-button pulse" 
          onClick={() => setShowForm(!showForm)}
        >
          {service.cta}
        </button>

        {showForm && (
          <form className="consultation-form slide-in">
            <h2>
              <i className="fa fa-calendar"></i>
              Schedule a Consultation
            </h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label>First Name*</label>
                <input type="text" required />
              </div>
              
              <div className="form-group">
                <label>Last Name*</label>
                <input type="text" required />
              </div>
              
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" />
              </div>
              
              <div className="form-group">
                <label>Company Email*</label>
                <input type="email" required />
              </div>
              
              <div className="form-group">
                <label>Company Website</label>
                <input type="url" />
              </div>
              
              <div className="form-group">
                <label>Date Available for Consultation</label>
                <input type="date" />
              </div>
              
              <div className="form-group full-width">
                <label>Address</label>
                <input type="text" />
              </div>
              
              <div className="form-group full-width">
                <label>Consultation Details</label>
                <textarea rows="4" />
              </div>
              
              <div className="form-group full-width">
                <label>Other Details</label>
                <textarea rows="3" />
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
