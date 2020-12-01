import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CommentsArea, CommentsDiv } from './styles'

export default function Comments({ onComments }) {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state['reportsForm']['comments'])

  return (
    <CommentsDiv>
      <label>Comments:</label>
      <CommentsArea
        onChange={(e) =>
          dispatch({ type: onComments, payload: e.target.value })
        }
        value={comments}
        rows="4"
        cols="35"
        maxLength="120"
      ></CommentsArea>
    </CommentsDiv>
  )
}
