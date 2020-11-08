import React from 'react'
import { connect } from 'react-redux'
import {
  addMachine,
  modifyMachine,
  CLEAN_MESSAGE_MACHINES
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addMachine, modifyMachine, edit }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/machines'}
          name={CLEAN_MESSAGE_MACHINES}
        />
      ) : (
        <Form onSubmit={addMachine} onEdit={modifyMachine} edit={edit} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.machines.message
})

export default connect(mapStateToProps, { addMachine, modifyMachine })(Portal)
