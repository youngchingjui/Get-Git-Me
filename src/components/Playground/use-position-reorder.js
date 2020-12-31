import { useState, useRef } from 'react'
import { clamp, distance } from 'popmotion'
import move from 'array-move'

export function usePositionReorder(initialState) {
  const [order, setOrder] = useState(initialState)

  // We need to collect an array of width and position data for all of this component's
  // `Item` children, so we can later us that in calculations to decide when a dragging
  // `Item` should swap places with its siblings.
  const positions = useRef([]).current
  const updatePosition = (i, offset) => (positions[i] = offset)

  // Find the ideal index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.
  const updateOrder = (i, dragOffset) => {
    const targetIndex = findIndex(i, dragOffset, positions)
    if (targetIndex !== i) setOrder(move(order, i, targetIndex))
  }

  return [order, updatePosition, updateOrder]
}

const buffer = 30

export const findIndex = (i, xOffset, positions) => {
  let target = i
  const { left, width } = positions[i]
  const right = left + width

  // If moving right
  if (xOffset > 0) {
    const nextItem = positions[i + 1]
    if (nextItem === undefined) return i

    const swapOffset =
      distance(right, nextItem.left + nextItem.width / 2) + buffer
    if (xOffset > swapOffset) target = i + 1

    // If moving left
  } else if (xOffset < 0) {
    const prevItem = positions[i - 1]
    if (prevItem === undefined) return i

    const prevBottom = prevItem.left + prevItem.width
    const swapOffset = distance(left, prevBottom - prevItem.width / 2) + buffer
    if (xOffset < -swapOffset) target = i - 1
  }

  return clamp(0, positions.length, target)
}
