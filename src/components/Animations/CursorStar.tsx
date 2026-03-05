import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const starPath =
  'm394.7 317.4-51.5-25.8a57.7 57.7 0 0 1 0-103.2l51.5-25.8a57.7 57.7 0 1 0-77.4-77.4l-25.7 51.6a57.7 57.7 0 0 1-103.2 0l-25.8-51.5a57.7 57.7 0 1 0-77.3 77.3l51.5 25.8a57.7 57.7 0 0 1 0 103.2l-51.5 25.8a57.7 57.7 0 1 0 77.3 77.3l25.8-51.5a57.7 57.7 0 0 1 103.2 0l25.8 51.5a57.7 57.7 0 1 0 77.4-77.4Z'

function CursorStar() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 250, damping: 25, mass: 0.5 })
  const smoothY = useSpring(y, { stiffness: 250, damping: 25, mass: 0.5 })

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      // Offset so the cursor is roughly in the center of the star
      x.set(event.clientX - 50)
      y.set(event.clientY - 50)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  return (
    <div>
      <motion.div
        style={{
          position: 'fixed',
          top: 50,
          left: 50,
          pointerEvents: 'none',
          x: smoothX,
          y: smoothY,
        }}
      >
        <svg width={100} height={100} viewBox="0 0 480 480">
          <motion.path
            d={starPath}
            fill="#ff0088"
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{ transformOrigin: 'center' }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default CursorStar
