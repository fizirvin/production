import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMachines } from '../../machines/store/actions'
import { fetchPrograms } from '../../programs/store/actions'
import { fetchDefects } from '../../defects/store/actions'
import { fetchIssues } from '../../issues/store/actions'
import { fetchMaterials } from '../../material/store/actions'
import { fetchProfiles } from '../../workers/store/actions'

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
  COMMENTS_INPUT_REPORT,
  TEAM_INPUT_REPORT,
  OPER_INPUT_REPORT,
  INSP_INPUT_REPORT,
  PRODUCTION_INPUT_REPORT,
  RESINES_INPUT_REPORT,
  DOWNTIMES_INPUT_REPORT,
  NGS_INPUT_REPORT,
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
  issues,
  fetchIssues,
  materials,
  fetchMaterials,
  fetchProfiles,
  profiles,
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
  useEffect(() => {
    if (issues.length === 0) {
      fetchIssues()
    }
    return
  }, [issues, fetchIssues])
  useEffect(() => {
    if (materials.length === 0) {
      fetchMaterials()
    }
    return
  }, [materials, fetchMaterials])
  useEffect(() => {
    if (profiles.length === 0) {
      fetchProfiles()
    }
    return
  }, [profiles, fetchProfiles])

  const shifts = [
    { _id: '1', shift: '1' },
    { _id: '2', shift: '2' }
  ]

  const inputs = [
    {
      key: '1',
      reducer: 'reportsForm',
      input: 'real',
      name: REAL_INPUT_REPORT,
      disabled: true
    },
    {
      key: '2',
      reducer: 'reportsForm',
      input: 'ng',
      name: NG_INPUT_REPORT,
      disabled: true
    },
    {
      key: '3',
      reducer: 'reportsForm',
      input: 'ok',
      name: OK_INPUT_REPORT,
      disabled: true
    },
    {
      key: '4',
      reducer: 'reportsForm',
      input: 'cycles',
      name: CYCLES_INPUT_REPORT,
      disabled: true
    },
    {
      key: '5',
      reducer: 'reportsForm',
      input: 'plan',
      name: PLAN_INPUT_REPORT,
      disabled: true
    },
    {
      key: '6',
      reducer: 'reportsForm',
      input: 'wtime',
      name: WTIME_INPUT_REPORT,
      disabled: true
    },
    {
      key: '7',
      reducer: 'reportsForm',
      input: 'tprod',
      name: TPROD_INPUT_REPORT,
      disabled: true
    },
    {
      key: '8',
      reducer: 'reportsForm',
      input: 'dtime',
      name: DTIME_INPUT_REPORT,
      disabled: true
    },
    {
      key: '9',
      reducer: 'reportsForm',
      input: 'avail',
      name: AVAIL_INPUT_REPORT,
      disabled: true
    },
    {
      key: '10',
      reducer: 'reportsForm',
      input: 'perf',
      name: PERF_INPUT_REPORT,
      disabled: true
    },
    {
      key: '11',
      reducer: 'reportsForm',
      input: 'qual',
      name: QUAL_INPUT_REPORT,
      disabled: true
    },
    {
      key: '12',
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
          onProduction={PRODUCTION_INPUT_REPORT}
          onTeam={TEAM_INPUT_REPORT}
          onOper={OPER_INPUT_REPORT}
          onInsp={INSP_INPUT_REPORT}
          onComments={COMMENTS_INPUT_REPORT}
          onResine={RESINES_INPUT_REPORT}
          onDowntime={DOWNTIMES_INPUT_REPORT}
          onNgs={NGS_INPUT_REPORT}
          machine={machine}
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
  machine: state.reportsForm.machine,
  issues: state.issues.items,
  materials: state.materials.items,
  profiles: state.profiles.items
})

export default connect(mapStateToProps, {
  fetchMachines,
  fetchPrograms,
  fetchDefects,
  fetchIssues,
  fetchMaterials,
  fetchProfiles
})(Form)
