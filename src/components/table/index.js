import React from 'react'
import styled from '@emotion/styled'

export const Table = styled.table`
  border-spacing: 1px;
  border: solid 1px;
  margin: 1px;

  th {
    position: sticky;
    top: 0;
  }
`

const TH = styled.th`
  font-size: 1.5rem;
  padding: 10px;
  background-color: orange;
`

export const TD = styled.td`
  font-size: 1.5rem;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 1px;
`

export function THeader({ id, text }) {
  return <TH id={id}>{text}</TH>
}
