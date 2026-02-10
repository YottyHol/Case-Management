import { Case, CaseStatus } from '../types/case'

interface CaseCardProps {
  case: Case
  onStatusChange: (caseId: number, newStatus: CaseStatus) => void
}

function CaseCard({ case: caseItem, onStatusChange }: CaseCardProps) {
  const handleClick = () => {
    const newStatus: CaseStatus = caseItem.status === 'open' ? 'closed' : 'open'
    onStatusChange(caseItem.id, newStatus)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-l-4 border-blue-500 hover:border-blue-600"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800 text-lg">
          {caseItem.title}
        </h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
          #{caseItem.id}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {caseItem.description}
      </p>
      <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
        <span>{caseItem.client || 'No client'}</span>
        <span>{new Date(caseItem.createdAt).toLocaleDateString()}</span>
      </div>
      {caseItem.priority && (
        <div className="mt-2">
          <span
            className={`text-xs px-2 py-1 rounded ${
              caseItem.priority === 'high'
                ? 'bg-red-100 text-red-700'
                : caseItem.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-green-100 text-green-700'
            }`}
          >
            {caseItem.priority}
          </span>
        </div>
      )}
    </div>
  )
}

export default CaseCard
