import React from 'react'
import { connect } from 'react-redux'
import { addIssue, CLEAN_MESSAGE_ISSUES } from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addIssue }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/issues'} name={CLEAN_MESSAGE_ISSUES} />
      ) : (
        <Form onSubmit={addIssue} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.issues.message
})

export default connect(mapStateToProps, { addIssue })(Portal)
