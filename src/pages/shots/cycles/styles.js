import styled from '@emotion/styled'

export const CyclesTable = styled.table`
  border-spacing: 1px;
  border: solid 1px;
  margin: 1px;
`

export const TH = styled.th`
  font-size: 1.5rem;
  padding: 10px;
  background-color: orange;
`

export const TD = styled.td`
  font-size: 1.5rem;
  padding: 10px;
  background-color: gainsboro;
`
export const StatusTD = styled.td(({ status }) => ({
  fontSize: '1.5rem',
  padding: '10px',
  backgroundColor: status
}))
