import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchIssues } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ issues, fetchIssues }) => {
  const { loading, message, items } = issues

  useEffect(() => {
    if (items.length === 0) {
      fetchIssues()
    }
  }, [items, fetchIssues])

  return (
    <>
      {loading && <Spinner />}
      {message && <div>{message}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  issues: state.issues
})

export default connect(mapStateToProps, { fetchIssues })(Connect)
