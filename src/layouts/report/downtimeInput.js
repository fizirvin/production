import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SectionRow, TableData, CheckInput } from './styles'

export default function DowntimeInput({ issue, onDowntime }) {
  const downtimes = useSelector((state) => state['reportsForm']['downtimes'])
  const dispatch = useDispatch()

  const onCheck = () => {
    const selected = downtimes.find((item) => item.issue === issue._id)
    if (selected) {
      const newDowntimes = [...downtimes].filter(
        (item) => item.issue !== issue._id
      )

      return dispatch({ type: onDowntime, payload: newDowntimes })
    }
    if (!selected) {
      const newDowntime = {
        issue: issue._id,
        mins: 0
      }
      const newDowntimes = [...downtimes, newDowntime]
      return dispatch({ type: onDowntime, payload: newDowntimes })
    }
  }

  const onIssue = useCallback(
    (e) => {
      const { value } = e.target

      const otherDowntimes = [...downtimes].filter(
        (item) => item.issue !== issue._id
      )

      const newDowntime = {
        issue: issue._id,
        mins: +value
      }

      const newDowntimes = [...otherDowntimes, newDowntime]
      dispatch({ type: onDowntime, payload: newDowntimes })
    },
    [downtimes, issue._id, onDowntime, dispatch]
  )

  const isCheck = () => {
    return downtimes.find((item) => item.issue === issue._id)
  }

  const isValue = () => {
    const value = downtimes.find((item) => item.issue === issue._id)
    return value ? value.mins : 0
  }

  return (
    <SectionRow>
      <TableData>
        <CheckInput
          type="checkbox"
          onChange={onCheck}
          checked={isCheck()}
          value={issue._id}
        ></CheckInput>
        <label>
          {issue.code} {issue.name}
        </label>
      </TableData>
      <TableData>
        <input
          type="number"
          id={issue._id}
          onChange={onIssue}
          disabled={!isCheck()}
          value={isValue()}
          onFocus={(e) => {
            if (e.target.value === '0') {
              e.target.value = ''
            }
          }}
          onBlur={(e) => {
            if (e.target.value === '') {
              e.target.value = 0
            }
          }}
        ></input>
      </TableData>
    </SectionRow>
  )
}
