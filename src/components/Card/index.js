import React from 'react'
import styled from 'styled-components'
import ClosedIssueIcon from './Closed Issue Icon.png'
import OpenIssueIcon from './Open Issue Icon.png'
import OptionsIcon from './Options Icon.png'

const CardContainer = styled.div`
  width: 300px;
  height: 65px;
  background: white;
  display: flex;
  align-items: flex-start;
  margin: 10px;
  cursor: grab;
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

const Card = () => {
  return (
    <CardContainer draggable>
      <IssueStatusIcon src={OpenIssueIcon} alt="Open Issue Icon" />
      <TextContainer>
        <IssueTitle>This is a test issue</IssueTitle>
        <IssueDescription>#2 opened by </IssueDescription>
        <IssueAuthor>youngchingjui</IssueAuthor>
      </TextContainer>
      <IssueOptionsIcon src={OptionsIcon} alt="Options Icon" />
    </CardContainer>
  )
}

export default Card
