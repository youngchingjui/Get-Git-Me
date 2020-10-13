import React from 'react'
import styled from 'styled-components'

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
`

const EmptyViewText = styled.div`
  margin: auto;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 300;
`

const View = () => {
  return (
    <ViewContainer>
      <ViewTitle>Priority Issues</ViewTitle>
      <ViewBox>
        <EmptyViewText>Drag your issues here</EmptyViewText>
      </ViewBox>
    </ViewContainer>
  )
}

export default View
