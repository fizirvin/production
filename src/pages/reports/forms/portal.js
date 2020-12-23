import React from 'react'
import { connect } from 'react-redux'
import {
  addReport,
  modifyReport,
  eraseReport,
  CLEAN_MESSAGE_REPORTS
} from '../store/actions'
import Form from './form'
import { PortalComponent, Message } from 'layouts'

const Portal = ({ message, addReport, modifyReport, edit, eraseReport }) => {
  return (
    <PortalComponent>
      {message ? (
        <Message
          message={message}
          to={'/reports'}
          name={CLEAN_MESSAGE_REPORTS}
        />
      ) : (
        <Form
          onSubmit={addReport}
          onEdit={modifyReport}
          edit={edit}
          onDelete={eraseReport}
        />
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  message: state.reports.message
})

export default connect(mapStateToProps, {
  addReport,
  modifyReport,
  eraseReport
})(Portal)
