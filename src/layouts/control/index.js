import React from 'react'
import { Link } from 'react-router-dom'
import SortComoponent from './sort'
import Pagination from './pagination'
import { ControlsDiv, CtrlsLabel } from './styles'

export default function ControlComponent({
  page,
  length,
  total,
  items,
  k,
  fetch,
  to,
  title,
  pagination,
  sortName,
  sort
}) {
  return (
    <ControlsDiv>
      <Pagination
        page={page}
        length={length}
        total={total}
        fetch={fetch}
        pagination={pagination}
      />
      {sort && <SortComoponent items={items} k={k} sortName={sortName} />}
      <CtrlsLabel>
        <Link to={to}>
          <button>Add {title}</button>
        </Link>
      </CtrlsLabel>
    </ControlsDiv>
  )
}
