import React from 'react'

export default function Pagination({ page, length, total, fetchReports }) {
  const lastPage = Math.ceil(total / 100)
  console.log(lastPage, page)
  return (
    <span>
      <label>
        Items: {length} / {total}
      </label>
      <span>
        {page < lastPage && (
          <button onClick={() => console.log(page++)}>Next</button>
        )}
      </span>
    </span>
  )
}
