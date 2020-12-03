import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SectionRow, TableData, CheckInput } from './styles'

export default function PurgeInput({ material, onResine }) {
  const resines = useSelector((state) => state['reportsForm']['resines'])
  const dispatch = useDispatch()

  const onCheck = () => {
    const selected = resines.find((item) => item.resine === material._id)
    if (selected) {
      const newResines = [...resines].filter(
        (item) => item.resine !== material._id
      )

      return dispatch({ type: onResine, payload: newResines })
    }
    if (!selected) {
      const newResine = {
        resine: material._id,
        purge: 0
      }
      const newResines = [...resines, newResine]
      return dispatch({ type: onResine, payload: newResines })
    }
  }

  const onPurge = (e) => {
    const { value } = e.target

    const otherResines = [...resines].filter(
      (item) => item.resine !== material._id
    )

    const newResine = {
      resine: material._id,
      purge: +value
    }

    const newResines = [...otherResines, newResine]
    dispatch({ type: onResine, payload: newResines })
  }

  const isCheck = () => {
    return resines.find((resine) => resine.resine === material._id)
  }

  const isValue = () => {
    const value = resines.find((resine) => resine.resine === material._id)
    return value ? value.purge : 0
  }

  return (
    <SectionRow>
      <TableData>
        <CheckInput
          type="checkbox"
          onChange={onCheck}
          checked={isCheck()}
          value={material._id}
        ></CheckInput>
        <label>{material.description}</label>
      </TableData>
      <TableData>
        <input
          type="number"
          id={material._id}
          onChange={onPurge}
          disabled={!isCheck()}
          value={isValue()}
        ></input>
      </TableData>
    </SectionRow>
  )
}
