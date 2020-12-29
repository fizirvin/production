import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchModels } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_MODELS } from './store/actions'

const sort = [
  { _id: 'name', sort: 'name' },
  { _id: 'family', sort: 'family' }
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
            sortName={SORT_MODELS}
            sort
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
