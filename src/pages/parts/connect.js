import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchModels } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ models, fetchModels }) => {
  const { loading, message, items } = models

  useEffect(() => {
    if (items.length === 0) {
      fetchModels()
    }
  }, [items, fetchModels])

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  models: state.models
})

export default connect(mapStateToProps, { fetchModels })(Connect)
