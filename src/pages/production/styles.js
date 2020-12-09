import styled from '@emotion/styled'

export const Controls = styled.div`
  border-spacing: 1px;
  border: solid 1px;
  display: flex;
  color: whitesmoke;
  margin-top: 5px;
`

export const Label = styled.div`
  margin-left: 5px;
  margin-right: 5px;
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
