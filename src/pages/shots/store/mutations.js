const newShot = {
  query: `mutation
    NewShot( $input: NewShot ){
        newShot(input: $input){
            _id
            molde
            date
            shift
            quantity
            end
            shiftEnd
            active
            comments
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

export { newShot, updateMaterial, removeMaterial }
