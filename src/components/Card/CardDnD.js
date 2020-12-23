import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components'
import { ItemTypes } from '../../ItemTypes'
import OpenIssueIcon from './Open Issue Icon.png'
import OptionsIcon from './Options Icon.png'

const CardContainer = styled.div`
  width: 300px;
  height: 65px;
  background: white;
  display: flex;
  align-items: flex-start;
  margin: 10px;
  cursor: move;
`

const IssueStatusIcon = styled.img`
  width: 15px;
  margin: 10px;
`

const TextContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`

const IssueTitle = styled.div`
  font-family: Montserrat-SemiBold;
  font-size: 14px;
  color: #2d77d9;
`

const IssueDescription = styled.span`
  font-family: Montserrat-SemiBold;
  font-size: 12px;
  color: #586069;
`
const IssueAuthor = styled.span`
  font-family: Montserrat-SemiBold;
  font-size: 12px;
  color: #24292e;
`
const IssueOptionsIcon = styled.img`
  width: 14px;
  margin: 10px;
`

export const Card = ({ id, title, description, author, index, moveCard }) => {
  const ref = useRef(null)
  const [_, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return (
    <div ref={ref}>
      <CardContainer>
        <IssueStatusIcon src={OpenIssueIcon} alt="Open Issue Icon" />
        <TextContainer>
          <IssueTitle>{title}</IssueTitle>
          <IssueDescription>{description}</IssueDescription>
          <IssueAuthor>{author}</IssueAuthor>
        </TextContainer>
        <IssueOptionsIcon src={OptionsIcon} alt="Options Icon" />
      </CardContainer>
    </div>
  )
}
