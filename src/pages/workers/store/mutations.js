const newProfile = {
  query: `mutation
  NewProfile( $input: NewProfile ){
        newProfile(input: $input){
            _id
            number
            firstname
            lastname
            gender
            entry
            department
            area
            team
            position
            active
            createdAt
            user
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

export { newProfile, updateMaterial, removeMaterial }
