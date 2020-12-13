import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMachines } from '../../machines/store/actions'
import { fetchMoldes } from '../../moldes/store/actions'
import { fetchModels } from '../../parts/store/actions'

import {
  FormComponent,
  InputNumberComponent,
  InputDecimalComponent,
  InputSelectComponent,
  Controls
} from 'layouts'

import {
  MACHINE_INPUT_PROGRAM,
  MOLDE_INPUT_MPROGRAM,
  MODEL_INPUT_PROGRAM,
  TIME_INPUT_PROGRAM,
  CAPACITY_INPUT_PROGRAM,
  CYCLES_INPUT_PROGRAM,
  CLEAN_INPUTS_PROGRAM
} from './formActions'

const Form = ({
  onSubmit,
  onEdit,
  edit,
  machines,
  machinesLoading,
  fetchMachines,
  moldes,
  moldesLoading,
  fetchMoldes,
  models,
  modelsLoading,
  fetchModels
}) => {
  useEffect(() => {
    if (machines.length === 0) {
      fetchMachines()
    }
    return
  }, [machines, fetchMachines])
  useEffect(() => {
    if (moldes.length === 0) {
      fetchMoldes()
    }
    return
  }, [moldes, fetchMoldes])
  useEffect(() => {
    if (models.length === 0) {
      fetchModels()
    }
    return
  }, [models, fetchModels])

  return (
    <FormComponent
      title={edit ? 'Update Injection Program' : 'Add New Injection Program'}
      to={'/programs'}
      controls={
        <Controls
          form={'programsForm'}
          load={'programs'}
          to="/programs"
          name={CLEAN_INPUTS_PROGRAM}
          onSubmit={edit ? onEdit : onSubmit}
        />
      }
    >
      <InputSelectComponent
        reducer={'programsForm'}
        input={'machine'}
        label={'Machine Number'}
        name={MACHINE_INPUT_PROGRAM}
        k={'number'}
        items={machines}
        loading={machinesLoading}
      />

      <InputSelectComponent
        reducer={'programsForm'}
        input={'molde'}
        label={'Mold Number'}
        name={MOLDE_INPUT_MPROGRAM}
        k={'number'}
        items={moldes}
        loading={moldesLoading}
      />
      <InputSelectComponent
        reducer={'programsForm'}
        input={'model'}
        label={'Model Name'}
        name={MODEL_INPUT_PROGRAM}
        k={'name'}
        items={models}
        loading={modelsLoading}
      />
      <InputDecimalComponent
        label={'Cycle Time (s)'}
        name={TIME_INPUT_PROGRAM}
        reducer={'programsForm'}
        input={'time'}
      />
      <InputNumberComponent
        label={'Capacity pcs / hr'}
        name={CAPACITY_INPUT_PROGRAM}
        reducer={'programsForm'}
        input={'capacity'}
      />
      <InputNumberComponent
        label={'Cycles / hr'}
        name={CYCLES_INPUT_PROGRAM}
        reducer={'programsForm'}
        input={'cycles'}
      />
    </FormComponent>
  )
}

const mapStateToProps = (state) => ({
  machines: state.machines.items,
  machinesLoading: state.machines.loading,
  moldes: state.moldes.items,
  moldesLoading: state.moldes.loading,
  models: state.models.items,
  modelsLoading: state.machines.loading
})

export default connect(mapStateToProps, {
  fetchMachines,
  fetchMoldes,
  fetchModels
})(Form)
