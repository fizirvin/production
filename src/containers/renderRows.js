import React from 'react'
import { TD } from 'components'
import { Link } from 'react-router-dom'

export default function renderRows(items, keys, headers, active, to) {
  const selectItem = (i) => {
    console.log(i)
  }

  const rows = items.map((item, index) => {
    const data = keys.map((key, ind) => {
      return (
        <TD key={key} headers={headers[ind]}>
          {item[key]}
        </TD>
      )
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
          <Link
            to={`/${to}/update/${item._id}`}
            onClick={() => selectItem(item)}
          >
            <button>Update</button>
          </Link>
        </TD>
      </tr>
    )
  })

  return { rows }
}
