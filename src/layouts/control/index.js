import React from 'react'
import SortComoponent from './sort'
import Pagination from './pagination'

export default function ControlComponent({ page, length, total, items, k }) {
  return (
    <div>
      <Pagination page={page} length={length} total={total} />
      <SortComoponent items={items} k={k} />
    </div>
  )
}
