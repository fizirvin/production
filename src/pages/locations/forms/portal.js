import React from 'react'
import { connect } from 'react-redux'
import {
  addLocation,
  modifyLocation,
  eraseLocation,
  CLEAN_MESSAGE_LOCATIONS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({
  message,
  addLocation,
  modifyLocation,
  edit,
  eraseLocation
}) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/locations'}
          name={CLEAN_MESSAGE_LOCATIONS}
        />
      ) : (
        <Form
          onSubmit={addLocation}
          onEdit={modifyLocation}
          edit={edit}
          onDelete={eraseLocation}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.locations.message
})

export default connect(mapStateToProps, {
  addLocation,
  modifyLocation,
  eraseLocation
})(Portal)
