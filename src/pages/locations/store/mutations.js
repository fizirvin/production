const newLocation = {
  query: `mutation
    NewLocation( $input: NewLocation ){
        newLocation(input: $input){
            _id
            code
            name
            area
            user
            createdAt    
        }
    }`
}

const updateLocation = {
  query: `mutation
    UpdateLocation($_id: ID, $input: UpdateLocation ){
        updateLocation(_id: $_id, input: $input){
          _id
          code
          name
          area
          user
          createdAt  
        }
    }`
}

const deleteLocation = {
  query: `mutation
    DeleteLocation($_id: ID, $user: ID ){
      deleteLocation(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newLocation, updateLocation, deleteLocation }
