import React from 'react'
import { connect } from 'react-redux'
import {
  addMaterial,
  modifyMaterial,
  CLEAN_MESSAGE_MATERIALS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addMaterial, modifyMaterial, edit }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/materials'}
          name={CLEAN_MESSAGE_MATERIALS}
        />
      ) : (
        <Form onSubmit={addMaterial} onEdit={modifyMaterial} edit={edit} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.materials.message
})

export default connect(mapStateToProps, { addMaterial, modifyMaterial })(Portal)
