const newPartNumber = {
  query: `mutation
    NewPartNumber( $input: NewPartNumber ){
        newPartNumber(input: $input){
            _id
            partNumber
            partName
            family
        }
    }`
}

const updatePartNumber = {
  query: `mutation
    UpdatePartNumber($_id: ID, $input: NewPartNumber ){
        updatePartNumber(_id: $_id, input: $input){
            _id
            partNumber
            partName
            family
        }
    }`
}

const removeModel = {
  query: `mutation
      UpdatePartNumber($_id: ID, $input: NewPartNumber ){
          updatePartNumber(_id: $_id, input: $input){
              _id
              partNumber
              partName
              family
          }
      }`
}

export { newPartNumber, removeModel, updatePartNumber }
