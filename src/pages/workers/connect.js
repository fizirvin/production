import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProfiles } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'
import { ControlComponent } from 'layouts'
import { SORT_PROFILES } from './store/actions'

const sort = [
  { _id: 'entry', sort: 'entry' },
  { _id: 'number', sort: 'number' }
]

const Connect = ({ profiles, fetchProfiles }) => {
  const { loading, message, items, total, page } = profiles

  useEffect(() => {
    if (items.length === 0) {
      fetchProfiles()
    }
  }, [items, fetchProfiles])

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
            fetch={fetchProfiles}
            to={'/employees/add'}
            title={'Employee'}
            sortName={SORT_PROFILES}
            sort
          />
          <Table items={items} />
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  profiles: state.profiles
})

export default connect(mapStateToProps, { fetchProfiles })(Connect)
