import React from 'react'
import { connect } from 'react-redux'
import { addUser, CLEAN_MESSAGE_USERS } from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addUser }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/users'} name={CLEAN_MESSAGE_USERS} />
      ) : (
        <Form onSubmit={addUser} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.users.message
})

export default connect(mapStateToProps, { addUser })(Portal)
