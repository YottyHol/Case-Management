import { useState } from 'react'
import { motion } from 'motion/react'
import CursorStar from './Animations/CursorStar'

const tabList: { id: number; label: string }[] = [
  {
    id: 1,
    label: 'Cursor Follow',
  },
  {
    id: 2,
    label: 'Bubbles',
  },
]

function AnimationSection() {
  const [activeTab, setActiveTab] = useState(tabList[0])

  return (
    <div className="py-10">
      <div id="navigation" className="">
        <ul className="flex flex-wrap gap-4 justify-center">
          {tabList.map(tab => (
            <li key={tab.id}>
              <motion.button
                className={`px-4 py-2 rounded-full ${
                  tab.id === activeTab.id
                    ? 'font-bold bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-800'
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {tab.label}
              </motion.button>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-10">{activeTab.id === 1 && <CursorStar />}</div>
    </div>
  )
}

export default AnimationSection
