import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchIssues } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_ISSUES } from './store/actions'

const sort = [
  { _id: 'code', sort: 'code' },
  { _id: 'name', sort: 'name' }
]

const Connect = ({ issues, fetchIssues }) => {
  const { loading, message, items, total, page } = issues

  useEffect(() => {
    if (items.length === 0) {
      fetchIssues()
    }
  }, [items, fetchIssues])

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
            fetch={fetchIssues}
            to={'/issues/add'}
            title={'Issue'}
            sortName={SORT_ISSUES}
            sort
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  issues: state.issues
})

export default connect(mapStateToProps, { fetchIssues })(Connect)
