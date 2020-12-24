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

const deleteShot = {
  query: `mutation
    DeleteShot($_id: ID, $user: ID ){
            deleteShot(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newShot, updateShot, finishShot, deleteShot }
