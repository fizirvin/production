import React from 'react'
import { TD } from 'components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function RenderShotsRows(
  items,
  keys,
  headers,
  active,
  to,
  name,
  shot
) {
  const dispatch = useDispatch()
  const onSelect = (i) => {
    const payload = {
      ...i,
      molde: i.molde._id
    }
    if (active) {
      dispatch({
        type: name,
        payload: { ...payload, [payload[active]]: payload[active].toString() }
      })
    } else {
      dispatch({ type: name, payload })
    }
  }

  const onShot = (item) => {
    console.log(item)
    dispatch({
      type: shot,
      payload: { shot: item._id, molde: item.molde.number, active: item.active }
    })
  }

  const rows = items.map((item, index) => {
    const data = keys.map((key, ind) => {
      if (!Array.isArray(key)) {
        return (
          <TD key={key} headers={headers[ind]}>
            {item[key]}
          </TD>
        )
      } else {
        return (
          <TD key={key[0]} headers={headers[ind]}>
            {item[key[0]][key[1]]}
          </TD>
        )
      }
    })

    return (
      <tr key={item._id}>
        <TD headers={'id'}>{index + 1}</TD>
        {data}
        {active && (
          <TD headers="act">
            <input type="checkbox" readOnly checked={item[active]}></input>
          </TD>
        )}
        <TD headers={'add'}>
          {item.active && (
            <Link
              to={`/${to}/update/${item._id}`}
              onClick={() => onSelect(item)}
            >
              <button>Update</button>
            </Link>
          )}
          <Link to={`/${to}/cycles/${item._id}`} onClick={() => onShot(item)}>
            <button>Cycles</button>
          </Link>
        </TD>
      </tr>
    )
  })

  return { rows }
}
