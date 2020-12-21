import styled from '@emotion/styled'

export const THMonth = styled.th`
  font-size: 1rem;
  padding: 10px;
  background-color: burlywood;
  border-spacing: 1px;
  text-align: center;
`

export const THDate = styled.th`
  font-size: 1rem;
  padding: 10px;
  background-color: burlywood;
  border-spacing: 1px;
  text-align: center;
  width: 20px;
  height: 20px;
`

export const TDMold = styled.th`
  font-size: 1rem;
  padding: 10px;
  background-color: gainsboro;
  border-spacing: 1px;
`

export const Mold = styled.td`
  font-size: 1rem;
  padding: 10px;
  background-color: gainsboro;
  border-spacing: 1px;
  height: 40px;
`

export const TD = styled.td`
  font-size: 1rem;
  padding: 10px;
  background-color: whitesmoke;
  border-spacing: 1px;
  height: 20px;
  text-align: center;
`

export const StatusTD = styled.td(({ status }) => ({
  fontSize: '1',
  backgroundColor: status,
  borderSpacing: '1px',
  height: '20px',
  textAlign: 'center'
}))

export const Table = styled.table`
  border: solid 2px;
  width: 100%;
  border-spacing: 1px;
  th {
    position: sticky;
    top: 0;
  }
`
