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

const updateModel = {
  query: `mutation
    UpdateModel($_id: ID, $input: UpdateModel ){
        updateModel(_id: $_id, input: $input){
            _id
            number
            name
            family
            user
            createdAt
        }
    }`
}

const deleteModel = {
  query: `mutation
    DeleteModel($_id: ID, $user: ID ){
            deleteModel(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newModel, deleteModel, updateModel }
