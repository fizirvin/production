import React from 'react'
import { connect } from 'react-redux'
import { addMolde } from '../store/actions'
// import Spinner from 'components/spinner'
import Form from './form'

const Connect = ({ loading, message, addMolde }) => {
  return (
    <>
      {<Form loading={loading} onSubmit={addMolde} />}
      {message && <div>{message}</div>}
    </>
  )
}

const mapStateToProps = (state) => ({
  loading: state.moldes.loading,
  message: state.moldes.message
})

export default connect(mapStateToProps, { addMolde })(Connect)
