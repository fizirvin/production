import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSpares } from '../../spares/store/actions'
import { fetchMachines } from '../../machines/store/actions'
import { fetchMoldes } from '../../moldes/store/actions'
import { fetchProfiles } from '../../workers/store/actions'

import {
  FormComponent,
  InputSelectComponent,
  InputNumberComponent,
  InputDateComponent,
  InputTextAreaComponent,
  Controls
} from 'layouts'
import TeamComponent from './team'
import {
  DATE_INPUT_OUTGOING,
  SHIFT_INPUT_OUTGOING,
  TEAM_INPUT_OUTGOING,
  MACHINE_INPUT_OUTGOING,
  MOLDE_INPUT_OUTGOING,
  OPERATOR_INPUT_OUTGOING,
  SPARE_INPUT_OUTGOING,
  QUANTITY_INPUT_OUTGOING,
  IMAGE_INPUT_OUTGOING,
  DESCRIPTION_INPUT_OUTGOING,
  REPAIRMAN_INPUT_OUTGOING,
  METHOD_INPUT_OUTGOING,
  CLEAN_INPUTS_OUTGOING
} from './formActions'

const Form = ({
  onSubmit,
  onEdit,
  edit,
  onDelete,
  fetchSpares,
  spares,
  sparesLoading,
  fetchMachines,
  machines,
  machinesLoading,
  fetchMoldes,
  moldes,
  moldesLoading,
  fetchProfiles,
  profiles,
  profilesLoading
}) => {
  const shifts = [
    { _id: '1', shift: '1' },
    { _id: '2', shift: '2' }
  ]

  useEffect(() => {
    if (spares.length === 0) {
      fetchSpares()
    }
    return
  }, [spares, fetchSpares])

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
    if (profiles.length === 0) {
      fetchProfiles()
    }
    return
  }, [profiles, fetchProfiles])

  return (
    <FormComponent
      title={edit ? 'Update Spare Outgoing' : 'Add New Spare Outgoing'}
      to={'/outgoings'}
      controls={
        <Controls
          form={'outgoingsForm'}
          load={'outgoings'}
          to="/outgoings"
          name={CLEAN_INPUTS_OUTGOING}
          onSubmit={edit ? onEdit : onSubmit}
          onDelete={onDelete}
          edit={edit}
        />
      }
    >
      <InputDateComponent
        reducer={'outgoingsForm'}
        input={'date'}
        label={'Date'}
        name={DATE_INPUT_OUTGOING}
      />
      <InputSelectComponent
        reducer={'outgoingsForm'}
        input={'shift'}
        label={'Shift'}
        name={SHIFT_INPUT_OUTGOING}
        k={'shift'}
        items={shifts}
      />
      <TeamComponent
        profiles={profiles}
        loading={profilesLoading}
        onTeam={TEAM_INPUT_OUTGOING}
        OperatorAction={OPERATOR_INPUT_OUTGOING}
        RepairmanAction={REPAIRMAN_INPUT_OUTGOING}
      />

      <InputSelectComponent
        reducer={'outgoingsForm'}
        input={'machine'}
        label={'Machine'}
        name={MACHINE_INPUT_OUTGOING}
        k={'number'}
        items={machines}
        loading={machinesLoading}
      />
      <InputSelectComponent
        reducer={'outgoingsForm'}
        input={'molde'}
        label={'Molde'}
        name={MOLDE_INPUT_OUTGOING}
        k={'number'}
        items={moldes}
        loading={moldesLoading}
      />

      <InputSelectComponent
        reducer={'outgoingsForm'}
        input={'spare'}
        label={'Spare'}
        name={SPARE_INPUT_OUTGOING}
        k={'name'}
        items={spares}
        loading={sparesLoading}
      />
      <InputNumberComponent
        label={'Quantity'}
        name={QUANTITY_INPUT_OUTGOING}
        reducer={'outgoingsForm'}
        input={'quantity'}
      />
      <InputTextAreaComponent
        reducer={'outgoingsForm'}
        input={'description'}
        label={'Cause Description'}
        name={DESCRIPTION_INPUT_OUTGOING}
        length={'60'}
      />

      <InputTextAreaComponent
        reducer={'outgoingsForm'}
        input={'method'}
        label={'Repair Description'}
        name={METHOD_INPUT_OUTGOING}
        length={'60'}
      />
      <tr>
        <td>
          <label htmlFor="image">Picture: </label>
        </td>
        <td>
          <input
            type="file"
            name="image"
            id="image"
            accept=".png, .jpg, .jpeg"
          ></input>
        </td>
      </tr>
    </FormComponent>
  )
}

const mapStateToProps = (state) => ({
  spares: state.spares.items,
  sparesLoading: state.spares.loading,
  machines: state.machines.items,
  machinesLoading: state.machines.loading,
  moldes: state.moldes.items,
  moldesLoading: state.moldes.loading,
  profiles: state.profiles.items,
  profilesLoading: state.profiles.loading
})

export default connect(mapStateToProps, {
  fetchSpares,
  fetchMachines,
  fetchMoldes,
  fetchProfiles
})(Form)
