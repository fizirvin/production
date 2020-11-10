import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchModels } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'

const sort = [
  { _id: '1', sort: 'code' },
  { _id: '2', sort: 'name' }
]

const Connect = ({ models, fetchModels }) => {
  const { loading, message, items, total, page } = models

  useEffect(() => {
    if (items.length === 0) {
      fetchModels()
    }
  }, [items, fetchModels])

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {items.length > 0 && !loading && (
        <>
          <ControlComponent
            length={items.length}
            page={page}
            total={total}
            items={sort}
            k={'sort'}
            loading={loading}
            fetch={fetchModels}
            to={'/models/add'}
            title={'Model'}
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  models: state.models
})

export default connect(mapStateToProps, { fetchModels })(Connect)
