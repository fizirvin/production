const newIngoing = {
  query: `mutation
    NewIngoing( $input: NewIngoing ){
      newIngoing(input: $input){
        _id
        date
        quantity
        origin
        provider
        price
        spare{
            _id
            code
            name
        }
        spCode
        user
        createdAt
        updatedAt  
        }
    }`
}

const updateIngoing = {
  query: `mutation
    UpdateIngoing($_id: ID, $input: UpdateIngoing ){
      updateIngoing(_id: $_id, input: $input){
        _id
        date
        quantity
        origin
        provider
        price
        spare{
            _id
            code
            name
        }
        spCode
        user
        createdAt
        updatedAt  
        }
    }`
}

const deleteIngoing = {
  query: `mutation
  DeleteIngoing($_id: ID, $user: ID ){
      deleteIngoing(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newIngoing, updateIngoing, deleteIngoing }
