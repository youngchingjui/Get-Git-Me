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
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        width: 500,
      }}
    >
      {order.map((color, i) => (
        <Item
          key={color}
          color={color}
          i={i}
          updatePosition={updatePosition}
          updateOrder={updateOrder}
        />
      ))}
    </div>
  )
}

function Item({ i, color, updatePosition, updateOrder }) {
  const [isDragging, setDragging] = useState(false)

  const ref = useMeasurePosition((pos) => updatePosition(i, pos))

  return (
    <motion.div
      ref={ref}
      layout
      initial={false}
      style={{
        background: color,
        width: 100,
        borderRadius: 5,
        zIndex: isDragging ? 3 : 1,
        height: 100,
        margin: 10,
        border: '2px solid black',
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 3px 3px rgba(0,0,0,0.15)',
      }}
      whileTap={{
        scale: 1.12,
        boxShadow: '0px 5px 5px rgba(0,0,0,0.1)',
      }}
      drag={true}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onViewportBoxUpdate={(viewportBox, _) => {
        isDragging && updateOrder(i, viewportBox)
      }}
    />
  )
}

const items = [
  '#d2fdff',
  '#3abeff',
  '#26ffe6',
  '#d84797',
  '#820933',
  '#97d2fb',
  '#83bcff',
  '#80ffe8',
  '#eccbd9',
  '#fff07c',
  '#5d737e',
  '#87bba2',
  '#60656f',
  '#c49991',
]
