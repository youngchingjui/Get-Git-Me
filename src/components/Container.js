import React, { useState, useCallback } from 'react'
import { Card } from './Card/CardDnD'
import update from 'immutability-helper'
const style = {
  width: 400,
}
export const Container = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Write a cool JS library',
      description: 'Random description',
      author: 'youngchingjui',
    },
    {
      id: 2,
      title: 'Make it generic enough',
      description: 'Random description',
      author: 'youngchingjui',
    },
    {
      id: 3,
      title: 'Write README',
      description: 'Random description',
      author: 'youngchingjui',
    },
    {
      id: 4,
      title: 'Create some examples',
      description: 'Random description',
      author: 'youngchingjui',
    },
    {
      id: 5,
      title: 'Spam in Twitter',
      description: 'Random description',
      author: 'youngchingjui',
    },
    {
      id: 6,
      title: '???',
      description: 'Random description',
      author: 'youngchingjui',
    },
    {
      id: 7,
      title: 'PROFIT',
      description: 'Random description',
      author: 'youngchingjui',
    },
  ])
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex]
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      )
    },
    [cards]
  )
  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        title={card.title}
        description={card.description}
        author={card.author}
        moveCard={moveCard}
      />
    )
  }
  return (
    <>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  )
}
