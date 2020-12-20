import styled from '@emotion/styled'

export const StatusTD = styled.td(({ status }) => ({
  fontSize: '1.5rem',
  padding: '10px',
  backgroundColor: status
}))

export const Table = styled.table`
  border-spacing: 1px;
  border: solid 1px;
  margin: 1px;

  th {
    position: sticky;
    top: 0;
  }
`

export const TH = styled.th`
  font-size: 1rem;
  padding: 10px;
  background-color: orange;
  border: solid 1px;
`

export const TD = styled.td`
  font-size: 1rem;
  padding: 10px;
  background-color: rgba(0, 164, 179, 1);
  text-align: right;
  border: solid 1px;
`

export const TDSecond = styled.td`
  font-size: 1rem;
  padding: 10px;
  background-color: #52b6ca;
  text-align: right;
  border: solid 1px;
`

export const TDSecondSub = styled.td`
  font-size: 1rem;
  padding: 10px;
  background-color: whitesmoke;
  text-align: right;
  border: solid 1px;
`

export const TRow = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`

export const DisplayButton = styled.button(({ color }) => ({
  backgroundColor: color,
  height: '20px',
  width: '20px'
}))
