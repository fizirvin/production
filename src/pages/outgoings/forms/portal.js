import React from 'react'
import { connect } from 'react-redux'
import {
  addOutgoing,
  modifyOutgoing,
  eraseOutgoing,
  CLEAN_MESSAGE_OUTGOINGS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({
  message,
  addOutgoing,
  modifyOutgoing,
  edit,
  eraseOutgoing
}) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/outgoings'}
          name={CLEAN_MESSAGE_OUTGOINGS}
        />
      ) : (
        <Form
          onSubmit={addOutgoing}
          onEdit={modifyOutgoing}
          edit={edit}
          onDelete={eraseOutgoing}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.outgoings.message
})

export default connect(mapStateToProps, {
  addOutgoing,
  modifyOutgoing,
  eraseOutgoing
})(Portal)
