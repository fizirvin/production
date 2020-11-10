import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchIssues } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'

const sort = [
  { _id: '1', sort: 'code' },
  { _id: '2', sort: 'name' }
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
