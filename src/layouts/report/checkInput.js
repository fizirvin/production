import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProductionCheckbox, TableData } from './styles'
import renderProgramInputs from './renderProgramInputs'

export default function CheckInput({
  program = {},
  reducer,
  input,
  type,
  edit
}) {
  const dispatch = useDispatch()

  const totalReport = useSelector((state) => state[reducer])
  const [check, setCheck] = useState(false)
  const [report, setReport] = useState({
    program: program._id,
    molde: program.molde._id,
    model: program.model._id,
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
  })

  const onCheck = (e) => {
    const selected = totalReport.production.find(
      (item) => item.program === program._id
    )
    if (selected) {
      const programs = [...totalReport.production].filter(
        (item) => item.program !== program._id
      )
      const { name } = e.target
      setCheck(false)
      return dispatch({ type: name, payload: programs })
    }
    if (!selected) {
      const report = {
        program: program._id,
        molde: program.molde._id,
        model: program.model._id,
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
      const programs = [...totalReport.production, report]
      setCheck(true)
      setReport(report)
      return dispatch({ type: type, payload: programs })
    }
  }

  const onInput = (e) => {
    const { value, name } = e.target
    let number = parseInt(value)
    if (isNaN(number)) {
      number = ''
    } else if (number === 0) {
      number = 0
    }
    const programs = [...totalReport.production].filter(
      (item) => item.program !== program._id
    )
    let real = report.real
    let ng = report.ng
    if (name === 'real') {
      real = number
    }
    if (name === 'ng') {
      ng = number
    }

    const prewtime = real / program.capacity
    const wtime = prewtime.toFixed(2)

    const TWTime = totalReport.production
      .filter((item) => item.program !== program._id)
      .reduce((a, b) => {
        return a + parseFloat(b.wtime)
      }, 0)

    const predtime =
      (totalReport.ptime - TWTime - wtime) / totalReport.production.length
    const dtime = predtime.toFixed(1)

    console.log(wtime, predtime, TWTime, program.capacity)
    const newReport = {
      ...report,
      real,
      ng,
      ok: real - ng,
      dtime,
      cycles: Math.round(real / program.molde.cavities)
    }

    const newPrograms = [...programs, newReport]
    setReport(newReport)
    return dispatch({ type: name, payload: newPrograms })
  }

  const programInputs = [
    { name: 'real', value: report['real'] },
    { name: 'ng', value: report['ng'] },
    { name: 'ok', value: report['ok'], disabled: true },
    { name: 'cycles', value: report['cycles'], disabled: true },
    { name: 'plan', value: report['plan'], disabled: true },
    { name: 'wtime', value: report['wtime'] },
    { name: 'prod', value: report['prod'], disabled: true },
    { name: 'dtime', value: report['dtime'], disabled: true },

    { name: 'avail', value: report['avail'], disabled: true },
    { name: 'perf', value: report['perf'], disabled: true },
    { name: 'qual', value: report['qual'], disabled: true },
    { name: 'oee', value: report['oee'], disabled: true }
  ]

  const inputs = renderProgramInputs(programInputs, onInput)

  return (
    <>
      <TableData>
        <ProductionCheckbox
          type="checkbox"
          checked={check}
          onChange={onCheck}
          // value={program._id}
          name={type}
        ></ProductionCheckbox>
        <label>{program.molde.number}</label>
      </TableData>
      <TableData>
        <label>{program.model.name}</label>
      </TableData>
      {inputs}
    </>
  )
}
