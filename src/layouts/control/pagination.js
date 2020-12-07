import React from 'react'
import { CtrlsLabel } from './styles'

export default function Pagination({ page, length, total, fetch }) {
  const lastPage = Math.ceil(total / 25)

  return (
    <div>
      <CtrlsLabel>
        Items: {length} / {total}
      </CtrlsLabel>

      {page < lastPage && <button onClick={() => fetch(page + 1)}>Next</button>}
    </div>
  )
}
