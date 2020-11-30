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
export const ButtonsDiv = styled.div`
  font-weight: bold;
  margin-top: 2px;
  margin-bottom: 2px;
`

export const SectionTwo = styled.div`
  display: flex;
`

export const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2px;
  width: 47%;
  overflow-y: auto;
  max-height: 40vh;
  min-height: 40vh;
`

export const DefectTable = styled.table`
  border-spacing: 1px;
  text-align: center;
  width: 100%;
  margin-left: 0;
  margin-top: 1px;
  margin-bottom: 1px;
  border: solid 2px;
`

export const SectionRow = styled.tr`
  margin: 0px;
  margin-right: 2%;
  margin-bottom: 1%;
  width: 45%;
  padding: 0;
  padding-left: 2%;
  text-align: left;
  border-radius: 9px;
`

export const CheckInput = styled.input`
  margin-left: 3px;
`

export const CommentsArea = styled.textarea`
  resize: none;
  font-size: 145%;
`

export const CommentsDiv = styled.div`
  display: flex;
  align-items: center;
`
