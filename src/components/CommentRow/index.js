import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Card from '../Card'

const ProfilePictureMask = styled.div`
  width: 50px;
  height: 50px;
  clip-path: circle(25px at center);
`

const CommentTitle = styled.div`
  background: #f1f8ff;
  border: 2px solid #d8e7f9;
  border-radius: 7px;
  padding: 15px;
`
const CommentBody = styled.div`
  border: 2px solid #d8e7f9;
  border-radius: 7px;
  padding: 15px;
`
const CommentRow = ({ comment }) => {
  return (
    <>
      <ProfilePictureMask>
        <img src={comment.user.avatar_url} alt="Commenter profile" width={50} />
      </ProfilePictureMask>
      <div>
        <CommentTitle>
          {comment.user.login} updated on {comment.updated_at}
        </CommentTitle>
        <CommentBody>
          <ReactMarkdown>{comment.body}</ReactMarkdown>
        </CommentBody>
      </div>
      <Card border="#D8E7F9" />
    </>
  )
}

export default CommentRow
