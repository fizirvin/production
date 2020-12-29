import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPrograms } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_PROGRAMS } from './store/actions'

const sort = [
  { _id: 'molde', sort: 'molde' },
  { _id: 'model', sort: 'model' },
  { _id: 'machine', sort: 'machine' }
]

const Connect = ({ programs, fetchPrograms }) => {
  const { loading, message, items, total, page } = programs

  useEffect(() => {
    if (items.length === 0) {
      fetchPrograms()
    }
  }, [items, fetchPrograms])

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
            fetch={fetchPrograms}
            to={'/programs/add'}
            title={'Program'}
            sortName={SORT_PROGRAMS}
            sort
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  programs: state.programs
})

export default connect(mapStateToProps, { fetchPrograms })(Connect)
