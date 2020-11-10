import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMachines } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'

const sort = [
  { _id: '1', sort: 'code' },
  { _id: '2', sort: 'name' }
]

const Connect = ({ machines, fetchMachines }) => {
  const { loading, message, items, total, page } = machines

  useEffect(() => {
    if (items.length === 0) {
      fetchMachines()
    }
  }, [items, fetchMachines])

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
            fetch={fetchMachines}
            to={'/machines/add'}
            title={'Machine'}
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  machines: state.machines
})

export default connect(mapStateToProps, { fetchMachines })(Connect)
