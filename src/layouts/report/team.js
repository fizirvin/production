import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RenderTeam from './renderTeam'

export default function Team({ onTeam, onInsp, onOper }) {
  const { team, oper, insp } = useSelector((state) => state['reportsForm'])
  const dispatch = useDispatch()

  const onChangeTeam = (e) => {
    dispatch({ type: onTeam, payload: e.target.value })
  }

  const onOperator = (e) => {
    dispatch({ type: onOper, payload: e.target.value })
  }

  const onInspector = (e) => {
    dispatch({ type: onInsp, payload: e.target.value })
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label>Team: </label>
          </td>
          <td>
            <select value={team} onChange={onChangeTeam}>
              <option value="" disabled>
                select
              </option>
              <option value="varias">R Varias</option>
              <option value="amealco">Amealco</option>
            </select>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>
            <label htmlFor="inspector">Inspector: </label>
          </td>
          <td>
            {team && (
              <select value={insp} onChange={onInspector}>
                <option value="">select</option>
                <RenderTeam team={team} />
              </select>
            )}
          </td>
        </tr>
        <tr>
          <td>
            <label>Operator: </label>
          </td>
          <td>
            {team && (
              <select value={oper} onChange={onOperator}>
                <option value="">select</option>
                <RenderTeam team={team} />
              </select>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
