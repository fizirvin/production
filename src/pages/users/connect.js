import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ users, fetchUsers }) => {
  const { loading, error, items } = users

  useEffect(() => {
    if (items.length === 0) {
      fetchUsers()
    }
  }, [items, fetchUsers])

  return (
    <>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps, { fetchUsers })(Connect)
