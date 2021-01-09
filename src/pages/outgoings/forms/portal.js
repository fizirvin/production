import React from 'react'
import { connect } from 'react-redux'
import {
  addIngoing,
  modifyIngoing,
  eraseIngoing,
  CLEAN_MESSAGE_INGOINGS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addIngoing, modifyIngoing, edit, eraseIngoing }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/ingoings'}
          name={CLEAN_MESSAGE_INGOINGS}
        />
      ) : (
        <Form
          onSubmit={addIngoing}
          onEdit={modifyIngoing}
          edit={edit}
          onDelete={eraseIngoing}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.ingoings.message
})

export default connect(mapStateToProps, {
  addIngoing,
  modifyIngoing,
  eraseIngoing
})(Portal)
