import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDefects } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_DEFECTS } from './store/actions'

const sort = [
  { _id: 'code', sort: 'code' },
  { _id: 'name', sort: 'name' }
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
            sortName={SORT_DEFECTS}
            sort
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
