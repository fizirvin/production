import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import CyclesList from './cyclesList'
import { PortalComponent, Message } from 'layouts'
import { CLEAN_INPUT_CYCLES, fetchCycles, finishingShot } from './cyclesReducer'
import Spinner from 'components/spinner'

const Portal = ({
  message,
  shot,
  molde,
  active,
  items,
  loading,
  fetchCycles,
  finishingShot
}) => {
  useEffect(() => {
    fetchCycles(shot)
  }, [fetchCycles, shot])

  const dispatch = useDispatch()

  const onClean = () => {
    dispatch({ type: CLEAN_INPUT_CYCLES })
  }

  return (
    <PortalComponent>
      {loading && <Spinner />}
      {message && (
        <Message message={message} to={'/shots'} name={CLEAN_INPUT_CYCLES} />
      )}
      {items.length > 0 && !loading && (
        <CyclesList
          items={items}
          molde={molde}
          shot={shot}
          clean={CLEAN_INPUT_CYCLES}
          finish={finishingShot}
          active={active}
        />
      )}
      {items.length === 0 && !loading && (
        <>
          <div>no reports</div>
          <Link to={'/shots/'} onClick={onClean}>
            <button>Back to Shots</button>
          </Link>
        </>
      )}
    </PortalComponent>
  )
}

const mapStateToProps = (state) => ({
  shot: state.cycles.shot,
  molde: state.cycles.molde,
  active: state.cycles.active,
  items: state.cycles.items,
  message: state.cycles.message,
  loading: state.cycles.loading
})

export default connect(mapStateToProps, { fetchCycles, finishingShot })(Portal)
