import React from 'react'
import { connect } from 'react-redux'
import {
  addMolde,
  modifyMolde,
  eraseMolde,
  CLEAN_MESSAGE_MOLDES
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addMolde, modifyMolde, edit, eraseMolde }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message message={message} to={'/molds'} name={CLEAN_MESSAGE_MOLDES} />
      ) : (
        <Form
          onSubmit={addMolde}
          onEdit={modifyMolde}
          edit={edit}
          onDelete={eraseMolde}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.moldes.message
})

export default connect(mapStateToProps, { addMolde, modifyMolde, eraseMolde })(
  Portal
)
