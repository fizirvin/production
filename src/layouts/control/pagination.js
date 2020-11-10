import React from 'react'

export default function Pagination({ page, length, total, fetch }) {
  const lastPage = Math.ceil(total / 25)

  return (
    <span>
      <label>
        Items: {length} / {total}
      </label>
      <span>
        {page < lastPage && (
          <button onClick={() => fetch(page + 1)}>Next</button>
        )}
      </span>
    </span>
  )
}
