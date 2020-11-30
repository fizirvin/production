import React from 'react'
import { CommentsArea, CommentsDiv } from './styles'

export default function Comments() {
  return (
    <CommentsDiv>
      <label>Comments:</label>
      <CommentsArea
        // onChange={onComments}
        // value={comments}
        rows="4"
        cols="35"
        maxLength="120"
      ></CommentsArea>
    </CommentsDiv>
  )
}
