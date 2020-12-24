import React from 'react'
import { connect } from 'react-redux'
import {
  addUser,
  modifyUser,
  eraseUser,
  CLEAN_MESSAGE_USERS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addUser, modifyUser, edit, eraseUser }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/users'} name={CLEAN_MESSAGE_USERS} />
      ) : (
        <Form
          onSubmit={addUser}
          onEdit={modifyUser}
          edit={edit}
          onDelete={eraseUser}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.users.message
})

export default connect(mapStateToProps, { addUser, modifyUser, eraseUser })(
  Portal
)
