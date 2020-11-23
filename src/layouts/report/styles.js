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

export const ProductionInput = styled.input`
  font-size: 100%;
  width: 100%;
`
