import { useEffect, useRef } from 'react'

export function useMeasurePosition(update) {
  // We'll use a `ref` to access the DOM element that the `motion.li` produces.
  // This will allow us to measure its width and position, which will be useful to
  // decide when a dragging element should switch places with its siblings.
  const ref = useRef(null)

  // Update the measured position of the item so we can calculate when we should rearrange.
  useEffect(() => {
    update({
      width: ref.current.offsetWidth,
      left: ref.current.offsetLeft,
    })
  })

  return ref
}
