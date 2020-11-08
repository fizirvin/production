import React from 'react'
import { connect } from 'react-redux'
import { addModel, modifyModel, CLEAN_MESSAGE_MODELS } from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addModel, modifyModel, edit }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/models'} name={CLEAN_MESSAGE_MODELS} />
      ) : (
        <Form onSubmit={addModel} onEdit={modifyModel} edit={edit} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.models.message
})

export default connect(mapStateToProps, { addModel, modifyModel })(Portal)
