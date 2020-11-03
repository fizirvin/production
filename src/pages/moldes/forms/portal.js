import React from 'react'
import { connect } from 'react-redux'
import { addMolde, CLEAN_MESSAGE_MOLDES } from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addMolde }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/molds'} name={CLEAN_MESSAGE_MOLDES} />
      ) : (
        <Form onSubmit={addMolde} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.moldes.message
})

export default connect(mapStateToProps, { addMolde })(Portal)
