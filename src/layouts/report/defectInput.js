import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SectionRow, TableData, CheckInput } from './styles'

export default function DefectInput({ defect, molde, model, onNgs }) {
  const ngs = useSelector((state) => state['reportsForm']['ngs'])
  const dispatch = useDispatch()

  const onCheck = () => {
    const selected = ngs.find(
      (item) =>
        item.molde === molde &&
        item.model === model &&
        item.defect === defect._id
    )
    if (selected) {
      const newNgs = [...ngs].filter((item) => item !== selected)

      return dispatch({ type: onNgs, payload: newNgs })
    }
    if (!selected) {
      const newNg = {
        defect: defect._id,
        model,
        molde,
        pieces: 0
      }
      const newNgs = [...ngs, newNg]
      return dispatch({ type: onNgs, payload: newNgs })
    }
  }

  const onDefect = (e) => {
    const { value } = e.target

    const newNg = {
      defect: defect._id,
      model,
      molde,
      pieces: +value
    }
    const selected = ngs.find(
      (item) =>
        item.molde === molde &&
        item.model === model &&
        item.defect === defect._id
    )
    const otherNgs = [...ngs].filter((item) => item !== selected)

    const newNgs = [...otherNgs, newNg]

    dispatch({ type: onNgs, payload: newNgs })
  }

  const isCheck = () => {
    return ngs.find(
      (item) =>
        item.molde === molde &&
        item.model === model &&
        item.defect === defect._id
    )
  }

  const isValue = () => {
    const value = ngs.find(
      (item) =>
        item.molde === molde &&
        item.model === model &&
        item.defect === defect._id
    )
    return value ? value.pieces : 0
  }

  return (
    <SectionRow>
      <TableData>
        <CheckInput
          type="checkbox"
          onChange={onCheck}
          checked={isCheck()}
        ></CheckInput>
        <label>
          {defect.code} {defect.name}
        </label>
      </TableData>
      <TableData>
        <input
          type="number"
          onChange={onDefect}
          disabled={!isCheck()}
          value={isValue()}
        ></input>
      </TableData>
    </SectionRow>
  )
}
