import React from 'react'
import { connect } from 'react-redux'
import { addMolde } from '../store/actions'
// import Spinner from 'components/spinner'
import Form from './form'

const Connect = ({ loading, error, addMolde }) => {
  return (
    <>
      {<Form loading={loading} onSubmit={addMolde} />}
      {error && <div>{error}</div>}
    </>
  )
}

const mapStateToProps = (state) => ({
  loading: state.moldes.loading,
  error: state.moldes.error
})

export default connect(mapStateToProps, { addMolde })(Connect)
