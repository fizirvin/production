import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CyclesList from './cyclesList'
import { PortalComponent, Message } from 'layouts'
import { CLEAN_INPUT_CYCLES, fetchCycles } from './cyclesReducer'
import Spinner from 'components/spinner'

const Portal = ({ message, shot, items, loading, fetchCycles }) => {
  useEffect(() => {
    fetchCycles(shot)
  }, [fetchCycles, shot])

  console.log(items)

  return (
    <PortalComponent>
      {loading && <Spinner />}
      {message && (
        <Message message={message} to={'/shots'} name={CLEAN_INPUT_CYCLES} />
      )}
      {items.length > 0 && !loading && <CyclesList items={items} />}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  shot: state.cycles.shot,
  items: state.cycles.items,
  message: state.cycles.message,
  loading: state.cycles.loading
})

export default connect(mapStateToProps, { fetchCycles })(Portal)
