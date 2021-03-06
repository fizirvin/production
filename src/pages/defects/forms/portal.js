import React from 'react'
import { connect } from 'react-redux'
import {
  addDefect,
  modifyDefect,
  eraseDefect,
  CLEAN_MESSAGE_DEFECTS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addDefect, modifyDefect, edit, eraseDefect }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/defects'}
          name={CLEAN_MESSAGE_DEFECTS}
        />
      ) : (
        <Form
          onSubmit={addDefect}
          onEdit={modifyDefect}
          edit={edit}
          onDelete={eraseDefect}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.defects.message
})

export default connect(mapStateToProps, {
  addDefect,
  modifyDefect,
  eraseDefect
})(Portal)
