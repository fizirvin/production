import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'

const sort = [
  { _id: '1', sort: 'code' },
  { _id: '2', sort: 'name' }
]

const Connect = ({ users, fetchUsers }) => {
  const { loading, message, items, total, page } = users

  useEffect(() => {
    if (items.length === 0) {
      fetchUsers()
    }
  }, [items, fetchUsers])

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
            fetch={fetchUsers}
            to={'/users/add'}
            title={'User'}
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps, { fetchUsers })(Connect)
