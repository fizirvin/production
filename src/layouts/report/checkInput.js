import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProductionCheckbox, TableData } from './styles'

export default function CheckInput({
  program = {},
  reducer,
  input,
  name,
  edit
}) {
  const dispatch = useDispatch()

  const value = useSelector((state) => state[reducer][input])
  const [check, setCheck] = useState(false)
  const onCheck = (e) => {
    const selected = value.find((item) => item.program === program._id)

    if (selected) {
      const programs = [...value].filter((item) => item.program !== program._id)
      const { name } = e.target
      setCheck(false)
      return dispatch({ type: name, payload: programs })
    }
    if (!selected) {
      const report = {
        program: program._id || '',
        molde: program.molde._id || '',
        model: program.model._id || '',
        real: 0,
        ng: 0,
        ok: 0,
        plan: 0,
        prod: 0,
        cycles: 0,
        wtime: 0.0,
        dtime: 0.0,
        avail: 0.0,
        perf: 0.0,
        qual: 0.0,
        oee: 0.0
      }
      const programs = [...value, report]
      const { name } = e.target
      setCheck(true)
      return dispatch({ type: name, payload: programs })
    }
  }

  return (
    <>
      <TableData>
        <ProductionCheckbox
          type="checkbox"
          checked={check}
          onChange={onCheck}
          // value={program._id}
          name={name}
        ></ProductionCheckbox>
        <label>{program.molde.number}</label>
      </TableData>
      <TableData>
        <label>{program.model.name}</label>
      </TableData>
    </>
  )
}
