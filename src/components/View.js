import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

const ViewContainer = styled.div`
  margin-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
`
const ViewTitle = styled.div`
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 300;
`
const ViewBox = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  box-shadow: 5px 10px #888888;
  background: #eff1f3;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border: 1px solid transparent;

  ${({ isOnHover }) => isOnHover && `border: 1px dashed #313628;`}
`

const EmptyViewText = styled.div`
  margin: auto;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 300;
`

const View = () => {
  const [issueList, setIssueList] = useState([<Card />, <Card />])
  const [isOnHover, setIsOnHover] = useState(false)

  const handleDragEnter = (e) => {
    e.preventDefault()
    setIsOnHover(true)
  }
  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsOnHover(false)
  }
  const handleDragOver = (e) => {
    e.preventDefault()
  }
  const handleDrop = (e) => {
    console.log(e.dataTransfer)
    e.preventDefault()
    e.stopPropagation()
    setIsOnHover(false)
  }
  return (
    <ViewContainer
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <ViewTitle>Priority Issues</ViewTitle>
      <ViewBox isOnHover={isOnHover}>
        {issueList.length < 1 && (
          <EmptyViewText>Drag your issues here</EmptyViewText>
        )}
        {issueList.map((i) => i)}
      </ViewBox>
    </ViewContainer>
  )
}

export default View
