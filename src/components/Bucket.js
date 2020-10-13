import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const BucketContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
`

const BucketTitle = styled.div`
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 300;
  margin-left: 30px;
`

const BucketBox = styled.div`
  background: #eff1f3;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  height: 200px;
  padding: 25px 25px 0 25px;
  justify-content: space-around;
`

const Bucket = () => {
  return (
    <BucketContainer>
      <BucketTitle>Issue Bucket</BucketTitle>
      <BucketBox>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </BucketBox>
    </BucketContainer>
  )
}

export default Bucket
