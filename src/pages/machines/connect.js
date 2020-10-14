import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMachines } from './store/actions'
import Spinner from 'components/spinner'
import Table from './table'

const Connect = ({ machines, fetchMachines }) => {
  const { loading, error, items } = machines

  useEffect(() => {
    if (items.length === 0) {
      fetchMachines().then((response) => {
        console.log(response)
      })
    }
  }, [items, fetchMachines])

  return (
    <>
      {loading && <Spinner />}
      {error && <div>{error}</div>}
      {items.length > 0 && <Table items={items} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  machines: state.machines
})

export default connect(mapStateToProps, { fetchMachines })(Connect)
