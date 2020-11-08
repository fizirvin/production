import React from 'react'
import { connect } from 'react-redux'
import { addIssue, modifyIssue, CLEAN_MESSAGE_ISSUES } from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addIssue, modifyIssue, edit }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/issues'} name={CLEAN_MESSAGE_ISSUES} />
      ) : (
        <Form onSubmit={addIssue} onEdit={modifyIssue} edit={edit} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.issues.message
})

export default connect(mapStateToProps, { addIssue, modifyIssue })(Portal)
