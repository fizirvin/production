import React from 'react'
import { connect } from 'react-redux'
import {
  addModel,
  modifyModel,
  eraseModel,
  CLEAN_MESSAGE_MODELS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addModel, modifyModel, edit, eraseModel }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/models'} name={CLEAN_MESSAGE_MODELS} />
      ) : (
        <Form
          onSubmit={addModel}
          onEdit={modifyModel}
          edit={edit}
          onDelete={eraseModel}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.models.message
})

export default connect(mapStateToProps, { addModel, modifyModel, eraseModel })(
  Portal
)
