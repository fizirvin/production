import React from 'react'
import { CtrlsLabel } from './styles'

export default function Pagination({ page, length, total, fetch, pagination }) {
  const pag = pagination ? pagination : 100
  const lastPage = Math.ceil(total / pag)
  console.log(length, total, page, lastPage)
  return (
    <div>
      <CtrlsLabel>
        Items: {length} / {total}
      </CtrlsLabel>

      {page < lastPage && <button onClick={() => fetch(page + 1)}>Next</button>}
    </div>
  )
}
