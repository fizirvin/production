import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMachines } from '../../machines/store/actions'
import { fetchPrograms } from '../../programs/store/actions'
import { fetchDefects } from '../../defects/store/actions'

import {
  FormComponent,
  InputNumberComponent,
  InputDateComponent,
  Controls,
  InputSelectComponent,
  Report
} from 'layouts'

import {
  DATE_INPUT_REPORT,
  SHIFT_INPUT_REPORT,
  MACHINE_INPUT_REPORT,
  PLAN_TIME_INPUT_REPORT,
  REAL_INPUT_REPORT,
  NG_INPUT_REPORT,
  OK_INPUT_REPORT,
  PLAN_INPUT_REPORT,
  TPROD_INPUT_REPORT,
  CYCLES_INPUT_REPORT,
  WTIME_INPUT_REPORT,
  DTIME_INPUT_REPORT,
  AVAIL_INPUT_REPORT,
  PERF_INPUT_REPORT,
  QUAL_INPUT_REPORT,
  OEE_INPUT_REPORT,
  PURGE_INPUT_REPORT,
  COMMENTS_INPUT_REPORT,
  TEAM_INPUT_REPORT,
  OPER_INPUT_REPORT,
  INSP_INPUT_REPORT,
  PRODUCTION_INPUT_REPORT,
  CLEAN_INPUTS_REPORT
} from './formActions'

const Form = ({
  onSubmit,
  onEdit,
  edit,
  machines,
  machinesLoading,
  fetchMachines,
  programs,
  fetchPrograms,
  defects,
  fetchDefects,
  machine
}) => {
  useEffect(() => {
    if (machines.length === 0) {
      fetchMachines()
    }
    return
  }, [machines, fetchMachines])
  useEffect(() => {
    if (programs.length === 0) {
      fetchPrograms()
    }
    return
  }, [programs, fetchPrograms])
  useEffect(() => {
    if (defects.length === 0) {
      fetchDefects()
    }
    return
  }, [defects, fetchDefects])

  const shifts = [
    { _id: '1', shift: '1' },
    { _id: '2', shift: '2' }
  ]

  const inputs = [
    {
      _id: '1',
      reducer: 'reportsForm',
      input: 'real',
      name: REAL_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '2',
      reducer: 'reportsForm',
      input: 'ng',
      name: NG_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '3',
      reducer: 'reportsForm',
      input: 'ok',
      name: OK_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '4',
      reducer: 'reportsForm',
      input: 'cycles',
      name: CYCLES_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '5',
      reducer: 'reportsForm',
      input: 'plan',
      name: PLAN_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '6',
      reducer: 'reportsForm',
      input: 'wtime',
      name: WTIME_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '7',
      reducer: 'reportsForm',
      input: 'tprod',
      name: TPROD_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '8',
      reducer: 'reportsForm',
      input: 'dtime',
      name: DTIME_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '9',
      reducer: 'reportsForm',
      input: 'avail',
      name: AVAIL_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '10',
      reducer: 'reportsForm',
      input: 'perf',
      name: PERF_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '11',
      reducer: 'reportsForm',
      input: 'qual',
      name: QUAL_INPUT_REPORT,
      disabled: true
    },
    {
      _id: '12',
      reducer: 'reportsForm',
      input: 'oee',
      name: OEE_INPUT_REPORT,
      disabled: true
    }
  ]
  return (
    <FormComponent
      title={edit ? 'Update Injection Report' : 'Add New Injection Report'}
      to={'/reports'}
      controls={
        <Controls
          form={'reportsForm'}
          load={'reports'}
          to="/reports"
          name={CLEAN_INPUTS_REPORT}
          onSubmit={edit ? onEdit : onSubmit}
        />
      }
      report={
        <Report
          items={inputs}
          programs={programs.filter((prog) => prog.machine._id === machine)}
          name={PRODUCTION_INPUT_REPORT}
        />
      }
    >
      <InputDateComponent
        reducer={'reportsForm'}
        input={'date'}
        label={'Report Date'}
        name={DATE_INPUT_REPORT}
      />
      <InputSelectComponent
        reducer={'reportsForm'}
        input={'shift'}
        label={'Shift'}
        name={SHIFT_INPUT_REPORT}
        k={'shift'}
        items={shifts}
      />
      <InputSelectComponent
        reducer={'reportsForm'}
        input={'machine'}
        label={'Machine Number'}
        name={MACHINE_INPUT_REPORT}
        k={'number'}
        items={machines}
        loading={machinesLoading}
      />
      <InputNumberComponent
        label={'Plan Time (hrs):'}
        name={PLAN_TIME_INPUT_REPORT}
        reducer={'reportsForm'}
        input={'ptime'}
        min={0}
      />
    </FormComponent>
  )
}

const mapStateToProps = (state) => ({
  machines: state.machines.items,
  machinesLoading: state.machines.loading,
  defects: state.defects.items,
  programs: state.programs.items,
  machine: state.reportsForm.machine
})

export default connect(mapStateToProps, {
  fetchMachines,
  fetchPrograms,
  fetchDefects
})(Form)
