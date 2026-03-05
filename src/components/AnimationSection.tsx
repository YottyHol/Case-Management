import { useState } from 'react'
import CursorStar from './Animations/CursorStar'

const tabList: { id: number; label: string }[] = [
  {
    id: 1,
    label: 'Cursor Star Animation',
  },
  {
    id: 2,
    label: 'Bubbles',
  },
]

function AnimationSection() {
  const [activeTab, setActiveTab] = useState(tabList[0])

  return (
    <div className="">
      <div id="navigation" className="">
        <ul className="flex flex-wrap gap-4 justify-center">
          {tabList.map(tab => (
            <li key={tab.id}>
              <button
                className={`hover:underline ${tab.id === activeTab.id ? 'font-bold' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="">{activeTab.id === 1 && <CursorStar />}</div>
    </div>
  )
}

export default AnimationSection
