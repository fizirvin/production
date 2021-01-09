import React from 'react'
import Spinner from 'components/spinner'
import { useSelector, useDispatch } from 'react-redux'
import RenderTeam from './renderTeam'

export default function TeamComponent({
  onTeam,
  OperatorAction,
  RepairmanAction,
  loading = false,
  profiles
}) {
  const { team, operator, repairman } = useSelector(
    (state) => state['outgoingsForm']
  )
  const dispatch = useDispatch()

  const onChangeTeam = (e) => {
    dispatch({ type: onTeam, payload: e.target.value })
  }

  const onOperator = (e) => {
    dispatch({ type: OperatorAction, payload: e.target.value })
  }

  const onRepairman = (e) => {
    dispatch({ type: RepairmanAction, payload: e.target.value })
  }

  return (
    <>
      <tr>
        <td>
          <label>Team: </label>
        </td>
        <td>
          {profiles.length > 0 && (
            <select value={team} onChange={onChangeTeam}>
              <option value="" disabled>
                select
              </option>
              <option value="varias">R Varias</option>
              <option value="amealco">Amealco</option>
            </select>
          )}
        </td>
      </tr>
      <tr>
        <td>
          <label htmlFor="inspector">Operator: </label>
        </td>
        {loading && <Spinner />}
        <td>
          {team && (
            <select value={operator} onChange={onOperator}>
              <option value="">select</option>
              <RenderTeam team={team} />
            </select>
          )}
        </td>
      </tr>
      <tr>
        <td>
          <label>Repairman: </label>
        </td>
        {loading && <Spinner />}
        <td>
          {team && (
            <select value={repairman} onChange={onRepairman}>
              <option value="">select</option>
              <RenderTeam team={team} />
            </select>
          )}
        </td>
      </tr>
    </>
  )
}
