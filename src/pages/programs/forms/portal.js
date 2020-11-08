import React from 'react'
import { connect } from 'react-redux'
import {
  addProgram,
  modifyProgram,
  CLEAN_MESSAGE_PROGRAMS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addProgram, modifyProgram, edit }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/programs'}
          name={CLEAN_MESSAGE_PROGRAMS}
        />
      ) : (
        <Form onSubmit={addProgram} onEdit={modifyProgram} edit={edit} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.programs.message
})

export default connect(mapStateToProps, { addProgram, modifyProgram })(Portal)
