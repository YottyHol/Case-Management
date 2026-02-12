import { useState, useEffect } from 'react'
import CaseCard from './CaseCard'
import { Case, CaseStatus } from '../types/case'

function CaseSection() {
  const [cases, setCases] = useState<Case[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch cases from FastAPI backend
  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('http://localhost:8000/cases')

        if (!response.ok) {
          throw new Error(`Failed to fetch cases: ${response.status}`)
        }

        const data: Case[] = await response.json()
        setCases(data)
      } catch (err) {
        console.error('Error fetching cases:', err)
        setError('Unable to load cases. Please try again later.')
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

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
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
