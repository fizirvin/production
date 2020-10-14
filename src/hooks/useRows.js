import React from 'react'
import { TD } from 'components'

export default function useRoutes(items, keys, headers) {
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
        <TD headers={'add'}>button</TD>
      </tr>
    )
  })

  return { rows }
}
