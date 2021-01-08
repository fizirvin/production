import React from 'react'
import { TD } from 'components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function RenderIngoingsRows(
  items,
  keys,
  headers,
  active,
  to,
  name
) {
  const dispatch = useDispatch()
  const onSelect = (i) => {
    const payload = {
      ...i,
      spare: i.spare._id
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
          <Link to={`/${to}/update/${item._id}`} onClick={() => onSelect(item)}>
            <button>Update</button>
          </Link>
        </TD>
      </tr>
    )
  })

  return { rows }
}
