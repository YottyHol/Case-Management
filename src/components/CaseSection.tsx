import { useState, useEffect } from 'react'
import CaseCard from './CaseCard'
import { Case, CaseStatus } from '../types/case'

function CaseSection() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  // Fetch cases from API
  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoading(true)
        // TODO: Replace with actual API call
        // const response = await fetch('/api/cases')
        // const data = await response.json()

        // Mock data for now - replace with API call
        const mockCases: Case[] = [
          {
            id: 1,
            title: 'Client Contract Review',
            description:
              'Review and finalize the new client contract terms and conditions.',
            status: 'open',
            client: 'Acme Corp',
            priority: 'high',
            createdAt: new Date().toISOString(),
          },
          {
            id: 2,
            title: 'Legal Documentation',
            description: 'Prepare legal documentation for the merger agreement.',
            status: 'open',
            client: 'Tech Solutions Inc',
            priority: 'medium',
            createdAt: new Date(Date.now() - 86400000).toISOString(),
          },
          {
            id: 3,
            title: 'Compliance Audit',
            description:
              'Complete quarterly compliance audit and submit report.',
            status: 'closed',
            client: 'Global Industries',
            priority: 'high',
            createdAt: new Date(Date.now() - 172800000).toISOString(),
          },
          {
            id: 4,
            title: 'Patent Application',
            description:
              'File patent application for new technology innovation.',
            status: 'open',
            client: 'Innovation Labs',
            priority: 'low',
            createdAt: new Date(Date.now() - 259200000).toISOString(),
          },
        ]

        setCases(mockCases)
      } catch (error) {
        console.error('Error fetching cases:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCases()
  }, [])

  const handleStatusChange = async (
    caseId: number,
    newStatus: CaseStatus
  ): Promise<void> => {
    try {
      // TODO: Replace with actual API call
      // await fetch(`/api/cases/${caseId}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: newStatus }),
      // })

      // Update local state
      setCases((prevCases) =>
        prevCases.map((c) =>
          c.id === caseId ? { ...c, status: newStatus } : c
        )
      )
    } catch (error) {
      console.error('Error updating case status:', error)
    }
  }

  const openCases = cases.filter((c) => c.status === 'open')
  const closedCases = cases.filter((c) => c.status === 'closed')

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <p className="text-gray-600">Loading cases...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Cases
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Open Cases Column */}
        <div className="bg-gray-50 rounded-lg p-6 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Open Cases</h3>
            <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
              {openCases.length}
            </span>
          </div>
          <div className="space-y-4">
            {openCases.length > 0 ? (
              openCases.map((caseItem) => (
                <CaseCard
                  key={caseItem.id}
                  case={caseItem}
                  onStatusChange={handleStatusChange}
                />
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>No open cases</p>
              </div>
            )}
          </div>
        </div>

        {/* Closed Cases Column */}
        <div className="bg-gray-50 rounded-lg p-6 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Closed Cases
            </h3>
            <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
              {closedCases.length}
            </span>
          </div>
          <div className="space-y-4">
            {closedCases.length > 0 ? (
              closedCases.map((caseItem) => (
                <CaseCard
                  key={caseItem.id}
                  case={caseItem}
                  onStatusChange={handleStatusChange}
                />
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                <p>No closed cases</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseSection
