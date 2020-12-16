const newShot = {
  query: `mutation
    NewShot( $input: NewShot ){
        newShot(input: $input){
            _id
            molde{
                _id
                number
            }
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

const finishShot = {
  query: `mutation
  FinishShot($_id: ID, $input: FinishShot ){
    finishShot(_id: $_id, input: $input){
        _id
                molde{
                    _id
                    number
                }
                date
                shift
                quantity
                end
                shiftEnd
                active
                comments
                user
                createdAt
                updatedAt
        }
    }`
}

const updateShot = {
  query: `mutation
      UpdateShot($_id: ID, $input: UpdateShot ){
          updateShot(_id: $_id, input: $input){
            _id
            molde{
                _id
                number
            }
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

export { newShot, updateShot, finishShot, removeMaterial }
