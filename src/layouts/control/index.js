import React from 'react'
import { Link } from 'react-router-dom'
import SortComoponent from './sort'
import Pagination from './pagination'

export default function ControlComponent({
  page,
  length,
  total,
  items,
  k,
  fetch,
  to,
  title
}) {
  return (
    <div>
      <Pagination page={page} length={length} total={total} fetch={fetch} />
      <SortComoponent items={items} k={k} />
      <Link to={to}>
        <button>Add {title}</button>
      </Link>
    </div>
  )
}
