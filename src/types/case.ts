export type CaseStatus = 'open' | 'closed'
export type CasePriority = 'high' | 'medium' | 'low'

export interface Case {
  id: number
  title: string
  description: string
  status: CaseStatus
  client?: string
  priority?: CasePriority
  createdAt: string
}
