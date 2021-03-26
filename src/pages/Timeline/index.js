import React, { useEffect, useState } from 'react'
import github from '../../api/github'
import DefaultHeader from '../../components/DefaultHeader'
import styled from 'styled-components'
import CommentRow from '../../components/CommentRow'

const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
`

const Timeline = () => {
  const [comments, setComments] = useState([])

  const getGithubComments = async (data) => {
    try {
      const response = await github.get(
        `/repos/digital-luxury/luxurysociety-front-end/issues/comments`,
        {
          params: {
            sort: 'updated',
            direction: 'desc',
            per_page: 20,
          },
        }
      )
      setComments(response.data)
    } catch (e) {
      console.log(e.response)
    }
  }

  useEffect(() => {
    getGithubComments()
  }, [])

  return (
    <>
      <DefaultHeader />
      <TimelineContainer>
        <div></div>
        <h2>Latest comments</h2>
        <h2>Related issue</h2>
        {comments.map((item, index) => (
          <CommentRow comment={item} key={index} />
        ))}
      </TimelineContainer>
    </>
  )
}

export default Timeline
