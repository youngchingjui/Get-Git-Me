import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePositionReorder } from './use-position-reorder'
import { useMeasurePosition } from './use-measure-position'
import './styles.css'

/**
 * This is an example of drag-to-reorder in Framer Motion 2.
 *
 * By applying both drag and layout props to a component, if it changes place
 * in the DOM it'll either animate to its new position (if not dragging) or
 * stay stuck to the user's cursor (if dragging).
 */

export default function Example() {
  const [order, updatePosition, updateOrder] = usePositionReorder(items)

  return (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
      {order.map((width, i) => (
        <Item
          key={width}
          width={width}
          i={i}
          updatePosition={updatePosition}
          updateOrder={updateOrder}
        />
      ))}
    </div>
  )
}

function Item({ i, width, updatePosition, updateOrder }) {
  const [isDragging, setDragging] = useState(false)

  const ref = useMeasurePosition((pos) => updatePosition(i, pos))

  return (
    <div
      style={{
        padding: 0,
        width,
        // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
        zIndex: isDragging ? 3 : 1,
        height: 100,
      }}
    >
      <motion.div
        ref={ref}
        layout
        initial={false}
        style={{
          background: 'white',
          width,
          borderRadius: 5,
          height: 100,
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: '0px 3px 3px rgba(0,0,0,0.15)',
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: '0px 5px 5px rgba(0,0,0,0.1)',
        }}
        drag="x"
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_viewportBox, delta) => {
          isDragging && updateOrder(i, delta.y.translate)
        }}
      />
    </div>
  )
}

const items = [60, 80, 70, 100, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82]
