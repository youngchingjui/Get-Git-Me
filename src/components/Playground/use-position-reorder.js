import { useState, useRef } from 'react'
import { clamp, distance } from 'popmotion'
import move from 'array-move'
import { getIndexOfMin } from '../../functions/getMin'

export const usePositionReorder = (initialState) => {
  const [order, setOrder] = useState(initialState)

  // We need to collect an array of width and position data for all of this component's
  // `Item` children, so we can later us that in calculations to decide when a dragging
  // `Item` should swap places with its siblings.
  const positions = useRef([]).current
  const updatePosition = (i, offset) => (positions[i] = offset)

  // Find the ideal index for a dragging item based on its position in the array, and its
  // current drag offset. If it's different to its current index, we swap this item with that
  // sibling.
  const updateOrder = (i, viewportBox) => {
    const targetIndex = findIndex(i, viewportBox, positions)
    if (targetIndex !== i) setOrder(move(order, i, targetIndex))
  }

  return [order, updatePosition, updateOrder]
}

const margin = 20 // This margin needs to match space between cells exactly. TODO: Optimize for safer handling

export const findIndex = (i, currentBox, positions) => {
  let target = i
  const { left, width, top, height } = positions[i]
  const bottom = top + height

  currentBox.x.center = (currentBox.x.min + currentBox.x.max) / 2
  currentBox.y.center = (currentBox.y.min + currentBox.y.max) / 2

  // If current within same row
  if (
    currentBox.y.center > top - margin &&
    currentBox.y.center < bottom + margin
  ) {
    // Moving right
    if (currentBox.x.center > left + width / 2) {
      const nextItem = positions[i + 1]
      if (nextItem === undefined || nextItem.top !== top) return i // If end of array or not in same row
      if (currentBox.x.center > nextItem.left + nextItem.width / 2) {
        target = i + 1
      }
      // Moving left
    } else if (currentBox.x.center < left + width / 2) {
      const prevItem = positions[i - 1]
      if (prevItem === undefined || prevItem.top !== top) return i // If beginning of array or not in same row
      if (currentBox.x.center < prevItem.left + prevItem.width / 2) {
        target = i - 1
      }
    }
    return target
  }

  // If current going to row above
  if (currentBox.y.center < top - margin) {
    // Add index to positions array
    const indexedPositions = positions.map((el, i) => {
      return { ...el, i }
    })

    // Return only row above
    const targetRow = indexedPositions.filter(
      (el) => el.top + el.height === top - margin
    )

    // Get index of closest cell
    const closestIndex = getIndexOfMin(
      targetRow.map((el) =>
        distance(el.left + el.width / 2, currentBox.x.center)
      )
    )

    if (targetRow[closestIndex] === undefined) return target

    // Return index of closest cell
    return targetRow[closestIndex].i
  }

  // If current going to row below
  if (currentBox.y.center > bottom + margin) {
    // Add index to positions array
    const indexedPositions = positions.map((el, i) => {
      return { ...el, i }
    })

    // Return only row below
    const targetRow = indexedPositions.filter(
      (el) => el.top === bottom + margin
    )

    // Get index of closest cell
    const closestIndex = getIndexOfMin(
      targetRow.map((el) =>
        distance(el.left + el.width / 2, currentBox.x.center)
      )
    )

    if (targetRow[closestIndex] === undefined) return target

    // Return index of closest cell
    return targetRow[closestIndex].i
  }

  return clamp(0, positions.length, target)
}
