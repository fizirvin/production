import React from 'react'
import { connect } from 'react-redux'
import {
  addReport,
  modifyReport,
  CLEAN_MESSAGE_REPORTS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addReport, modifyReport, edit }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/reports'}
          name={CLEAN_MESSAGE_REPORTS}
        />
      ) : (
        <Form onSubmit={addReport} onEdit={modifyReport} edit={edit} />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.reports.message
})

export default connect(mapStateToProps, { addReport, modifyReport })(Portal)
