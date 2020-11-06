import React from 'react'
import { connect } from 'react-redux'
import { addProfile, CLEAN_MESSAGE_PROFILES } from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addProfile }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/employees'}
          name={CLEAN_MESSAGE_PROFILES}
        />
      ) : (
        <Form onSubmit={addProfile} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.profiles.message
})

export default connect(mapStateToProps, { addProfile })(Portal)
