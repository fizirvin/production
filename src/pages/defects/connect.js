import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDefects } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'

const sort = [
  { _id: '1', sort: 'code' },
  { _id: '2', sort: 'name' }
]

const Connect = ({ defects, fetchDefects }) => {
  const { loading, message, items, total, page } = defects
  useEffect(() => {
    if (items.length === 0) {
      fetchDefects()
    }
  }, [items, fetchDefects])

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
            fetch={fetchDefects}
            to={'/defects/add'}
            title={'Defect'}
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  defects: state.defects
})

export default connect(mapStateToProps, { fetchDefects })(Connect)
