const newSpare = {
  query: `mutation
    NewSpare( $input: NewSpare ){
      newSpare(input: $input){
          _id
          code
          name
          number
          image
          optimal
          stock
          price
          location{
              _id
              code
              name
          }
          loCode
          user
          createdAt  
        }
    }`
}

const updateSpare = {
  query: `mutation
    UpdateSpare($_id: ID, $input: UpdateSpare ){
      updateSpare(_id: $_id, input: $input){
          _id
          code
          name
          number
          image
          optimal
          stock
          price
          location{
              _id
              code
              name
          }
          loCode
          user
          createdAt
          updatedAt 
        }
    }`
}

const deleteSpare = {
  query: `mutation
  DeleteSpare($_id: ID, $user: ID ){
      deleteSpare(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newSpare, updateSpare, deleteSpare }
