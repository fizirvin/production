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
    UpdateMaterial($_id: ID, $input: NewMaterial ){
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
        }
    }`
}

const removeMaterial = {
  query: `mutation
    UpdateMaterial($_id: ID, $input: NewMaterial ){
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
        }
    }`
}

export { newMaterial, updateMaterial, removeMaterial }
