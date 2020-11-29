import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onInteger } from 'helpers'
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

    let real = report.real
    let ng = report.ng
    let wtime = report.wtime

    if (name === 'real') {
      real = onInteger(value, report.real)
      const prewtime = real / program.capacity
      wtime = parseFloat(prewtime.toFixed(2))
    }
    if (name === 'ng') {
      ng = onInteger(value, report.ng)
      const prewtime = real / program.capacity
      wtime = parseFloat(prewtime.toFixed(2))
    }
    if (name === 'wtime') {
      wtime = value
    }

    const programs = [...totalReport.production].filter(
      (item) => item.program !== program._id
    )

    const ok = real - ng

    const TWTime = totalReport.production
      .filter((item) => item.program !== program._id)
      .reduce((a, b) => {
        return a + parseFloat(b.wtime)
      }, 0)

    const predtime =
      (totalReport.ptime - TWTime - wtime) / totalReport.production.length
    const dtime = parseFloat(predtime.toFixed(2))

    const prod = Math.round(wtime * program.capacity)

    const productionTime = parseFloat(wtime + dtime)
    const preav = parseFloat((wtime / productionTime) * 100)
    const preplan = productionTime * program.capacity
    const plan = parseFloat(preplan.toFixed(0))

    const preperf = (real / prod) * 100
    const perf = parseFloat(preperf.toFixed(2)) || 0
    const avail = parseFloat(preav.toFixed(2)) || 0
    const preq = (ok / real) * 100
    const qual = parseFloat(preq.toFixed(2)) || 0
    const preoee = (avail * perf * qual) / 10000
    const oee = parseFloat(preoee.toFixed(2)) || 0

    const newReport = {
      ...report,
      real,
      ng,
      ok,
      dtime,
      wtime,
      cycles: Math.round(real / program.molde.cavities),
      prod,
      plan,
      avail,
      perf,
      qual,
      oee
    }

    const newPrograms = [...programs, newReport]
    setReport(newReport)
    return dispatch({ type, payload: newPrograms })
  }

  const programInputs = [
    { name: 'real', value: report['real'] },
    { name: 'ng', value: report['ng'] },
    { name: 'ok', value: report['ok'], disabled: true },
    { name: 'cycles', value: report['cycles'], disabled: true },
    { name: 'plan', value: report['plan'], disabled: true },
    {
      name: 'wtime',
      value: report['wtime'],
      step: '0.01'
    },
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
          value={program._id}
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
