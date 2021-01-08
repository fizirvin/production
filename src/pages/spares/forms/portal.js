import React from 'react'
import { connect } from 'react-redux'
import {
  addSpare,
  modifySpare,
  eraseSpare,
  CLEAN_MESSAGE_SPARES
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addSpare, modifySpare, edit, eraseSpare }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/spares'} name={CLEAN_MESSAGE_SPARES} />
      ) : (
        <Form
          onSubmit={addSpare}
          onEdit={modifySpare}
          edit={edit}
          onDelete={eraseSpare}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.spares.message
})

export default connect(mapStateToProps, {
  addSpare,
  modifySpare,
  eraseSpare
})(Portal)
