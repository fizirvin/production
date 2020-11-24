import styled from '@emotion/styled'

export const Table = styled.table`
  border: solid 2px;
  width: 100%;
  margin-top: 10px;
  border-spacing: 1px;
`

export const TableHeader = styled.th(({ w }) => ({
  width: `${w}%`,
  border: 'solid 1px',
  backgroundColor: 'gold'
}))

export const TableData = styled.td(({ w }) => ({
  width: `${w}%`,
  border: 'solid 1px',
  backgroundColor: 'white'
}))

export const ProductionInput = styled.input`
  font-size: 100%;
  width: 100%;
`
export const ProductionCheckbox = styled.input`
  padding-left: 1%;
  margin: 0;
`
