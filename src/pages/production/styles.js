import styled from '@emotion/styled'

export const Controls = styled.div`
  border-spacing: 1px;
  border: solid 1px;
  display: flex;
  color: whitesmoke;
  margin-top: 5px;

  @media (max-width: 850px) {
    width: 120%;
  }
`

export const Label = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`

export const TD = styled.td`
  font-size: 1.5rem;
  padding: 10px;
  background-color: gainsboro;
  border-spacing: 2px;
`
export const StatusTD = styled.td(({ status }) => ({
  fontSize: '1.5rem',
  padding: '10px',
  backgroundColor: status,
  borderSpacing: '2px'
}))

export const Table = styled.table`
  border: solid 2px;
  width: 96%;
  border-spacing: 8px;
`
