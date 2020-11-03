const newModel = {
  query: `mutation
  NewModel( $input: NewModel ){
    newModel(input: $input){
            _id
            number
            name
            family
            user
            createdAt
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

export { newModel, removeModel, updatePartNumber }
