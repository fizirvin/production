import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchModels } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ models, fetchModels }) => {
  const { loading, error, items } = models

  useEffect(() => {
    if (items.length === 0) {
      fetchModels()
    }
  }, [items, fetchModels])

  return (
    <>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  models: state.models
})

export default connect(mapStateToProps, { fetchModels })(Connect)
