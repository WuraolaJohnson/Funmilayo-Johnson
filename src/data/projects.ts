export type ProjectCategory =
  | 'Workflow Improvement'
  | 'Team Coordination'
  | 'Project Execution'
  | 'E-commerce Operations'
  | 'Customer Experience'

export const categories: (ProjectCategory | 'All')[] = [
  'All',
  'Workflow Improvement',
  'Team Coordination',
  'Project Execution',
  'E-commerce Operations',
  'Customer Experience',
]

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  organization: string
  summary: string
  problem: string
  approach: string
  responsibilities: string[]
  tools: string[]
  outcome: string
  image: string
  size: 'lg' | 'md' | 'sm'
}

const filler = {
  organization: 'Northstar Logistics Group',
  summary: 'Rebuilt core operating workflows to improve speed, accountability and service consistency.',
  problem: 'Disjointed handoffs, unclear ownership and inconsistent reporting created delays, duplicate work and low visibility across the operation.',
  approach: 'I mapped current workflows, identified process bottlenecks, and introduced a clearer ownership model with weekly KPI reviews and documented decision points.',
  responsibilities: ['Workflow analysis', 'Team coordination', 'KPI tracking', 'Issue resolution'],
  tools: ['Excel', 'Asana', 'Power BI', 'Google Workspace'],
  outcome: 'The operation gained a more predictable operating rhythm, faster response time and stronger team accountability.',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
}

export const projects: Project[] = [
  {
    ...filler,
    id: '01',
    title: 'Warehouse Flow Redesign',
    category: 'Workflow Improvement',
    size: 'lg',
    organization: 'Northstar Logistics Group',
    summary: 'Rebuilt the warehouse intake and dispatch flow to reduce delays and improve pacing across shift handoffs.',
    problem: 'Order intake and dispatch were constrained by manual handoffs, unclear task ownership and inconsistent schedule coordination.',
    approach: 'I mapped the full process, identified bottlenecks at intake and dispatch, and redesigned handoff checkpoints with clearer accountability and standard operating notes.',
    responsibilities: ['Workflow analysis', 'Process redesign', 'Shift coordination', 'Performance tracking'],
    tools: ['Excel', 'Asana', 'Power BI', 'Google Workspace'],
    outcome: 'Cycle time improved and backlog pressure dropped as the team adopted a more predictable operating rhythm.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    ...filler,
    id: '02',
    title: 'Team Alignment Sprint',
    category: 'Team Coordination',
    size: 'sm',
    organization: 'Northstar Logistics Group',
    summary: 'Created a structured team communication and accountability model to align daily priorities and reduce cross-functional friction.',
    problem: 'Different teams were working toward overlapping goals without a shared operating cadence, leading to missed updates and slower issue resolution.',
    approach: 'I introduced a simple weekly operating rhythm, clarified ownership for key deliverables and improved daily updates across departments.',
    responsibilities: ['Stakeholder alignment', 'Cross-functional coordination', 'Meeting design', 'Action tracking'],
    tools: ['Asana', 'Slack', 'Google Workspace', 'Excel'],
    outcome: 'Collaboration became more consistent, action items were resolved faster and decisions were made with better visibility.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    ...filler,
    id: '03',
    title: 'Launch Readiness Program',
    category: 'Project Execution',
    size: 'sm',
    organization: 'BluePeak Commerce',
    summary: 'Led the operational rollout for a new service model by coordinating process definition, staffing and launch readiness.',
    problem: 'The business was scaling quickly but onboarding and launch tasks were not yet formalized, which created confusion around responsibilities and timing.',
    approach: 'I mapped the launch requirements, created a phased readiness plan and tracked cross-functional dependencies to keep the team accountable.',
    responsibilities: ['Project planning', 'Launch tracking', 'Resource coordination', 'Risk monitoring'],
    tools: ['Notion', 'Excel', 'Slack', 'Google Workspace'],
    outcome: 'The new service model launched with fewer surprises, clearer ownership and a more stable first-month operating cycle.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    ...filler,
    id: '04',
    title: 'Marketplace Performance Recovery',
    category: 'E-commerce Operations',
    size: 'sm',
    organization: 'BluePeak Commerce',
    summary: 'Stabilized order fulfillment and customer experience performance after a period of growth-related service disruption.',
    problem: 'Demand had increased faster than the operating model, leading to delayed order processing, rising service complaints and uneven staffing coverage.',
    approach: 'I reviewed fulfillment and support workflows, rebalanced staffing, and created a clearer queue and escalation model for daily operations.',
    responsibilities: ['Order flow review', 'Capacity planning', 'Service recovery', 'Daily issue management'],
    tools: ['Shopify', 'Salesforce', 'Excel', 'Zendesk'],
    outcome: 'The operation returned to a more stable service level with improved consistency in fulfillment and customer communication.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    ...filler,
    id: '05',
    title: 'Customer Service Escalation Model',
    category: 'Customer Experience',
    size: 'sm',
    organization: 'BluePeak Commerce',
    summary: 'Designed a clearer escalation and response framework that reduced friction between service, operations and leadership teams.',
    problem: 'Customer issues were being handled inconsistently because ownership, response windows and communication channels were not clearly defined.',
    approach: 'I standardized the escalation path, documented intervention steps and created a reporting loop for recurring issues and root causes.',
    responsibilities: ['Service design', 'Process improvement', 'Escalation mapping', 'Reporting'],
    tools: ['Salesforce', 'Excel', 'Slack', 'Notion'],
    outcome: 'Response times became more predictable and the team had a clearer way to manage escalations without unnecessary delays.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    ...filler,
    id: '06',
    title: 'Inventory & SLA Dashboard',
    category: 'Workflow Improvement',
    size: 'md',
    organization: 'Northstar Logistics Group',
    summary: 'Built an operational dashboard to make service levels, inventory health and workflow performance easier to track in real time.',
    problem: 'Leadership relied on fragmented reports and manual updates, which made it difficult to identify issues quickly and monitor performance consistently.',
    approach: 'I consolidated the key metrics into a simple operational dashboard and aligned the reporting cadence with team priorities and service goals.',
    responsibilities: ['Dashboard design', 'Metric definition', 'Reporting setup', 'Operational reviews'],
    tools: ['Power BI', 'Excel', 'Google Sheets', 'Asana'],
    outcome: 'The team gained clearer visibility into service performance and operational risk, making weekly decision making more efficient.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    ...filler,
    id: '07',
    title: 'Project Governance Rollout',
    category: 'Project Execution',
    size: 'md',
    organization: 'Northstar Logistics Group',
    summary: 'Introduced a lean governance framework to improve project tracking, team accountability and communication across initiatives.',
    problem: 'New initiatives were advancing without a consistent review model, leading to uneven priorities and weak follow-through on critical actions.',
    approach: 'I created a lightweight project governance process with status checkpoints, decision logs and shared accountability across owners.',
    responsibilities: ['Governance design', 'Status reviews', 'Action planning', 'Stakeholder communication'],
    tools: ['Asana', 'Power BI', 'Excel', 'Slack'],
    outcome: 'Projects moved with stronger visibility and fewer surprises, helping the team stay focused on value-creating work.',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
  },
]
