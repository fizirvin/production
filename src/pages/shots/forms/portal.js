import React from 'react'
import { connect } from 'react-redux'
import {
  addShot,
  modifyShot,
  eraseShot,
  CLEAN_MESSAGE_SHOTS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addShot, modifyShot, edit, eraseShot }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/shots'} name={CLEAN_MESSAGE_SHOTS} />
      ) : (
        <Form
          onSubmit={addShot}
          onEdit={modifyShot}
          edit={edit}
          onDelete={eraseShot}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.shots.message
})

export default connect(mapStateToProps, { addShot, modifyShot, eraseShot })(
  Portal
)
