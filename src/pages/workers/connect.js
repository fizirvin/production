import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProfiles } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ profiles, fetchProfiles }) => {
  const { loading, error, items } = profiles

  useEffect(() => {
    if (items.length === 0) {
      fetchProfiles()
    }
  }, [items, fetchProfiles])

  return (
    <>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  profiles: state.profiles
})

export default connect(mapStateToProps, { fetchProfiles })(Connect)
