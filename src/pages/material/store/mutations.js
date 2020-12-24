const newMaterial = {
  query: `mutation
    NewMaterial( $input: NewMaterial ){
        newMaterial(input: $input){
            _id
            number
            manufacturer
            description
            acronym
            identification
            type
            unit
            color
            user
            createdAt
                
        }
    }`
}

const updateMaterial = {
  query: `mutation
    UpdateMaterial($_id: ID, $input: UpdateMaterial ){
        updateMaterial(_id: $_id, input: $input){
            _id
            number
            manufacturer
            description
            acronym
            identification
            type
            unit
            color
            user
            createdAt
        }
    }`
}

const deleteMaterial = {
  query: `mutation
    DeleteMaterial($_id: ID, $user: ID ){
        deleteMaterial(_id: $_id, user: $user){
              _id
          }
      }`
}

export { newMaterial, updateMaterial, deleteMaterial }
