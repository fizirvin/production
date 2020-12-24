const newProgram = {
  query: `mutation
    NewProgram( $input: NewProgram ){
        newProgram(input: $input){
            _id
            machine{
                _id
                number
            }
            molde{
                _id
                number
                cavities
            }
            model{
                _id
                name
            }
            time
            cycles
            capacity
            user
            createdAt
            updatedAt
        }
    }`
}

const updateProgram = {
  query: `mutation
    UpdateProgram($_id: ID, $input: UpdateProgram ){
        updateProgram(_id: $_id, input: $input){
            _id
            machine{
                _id
                number
            }
            molde{
                _id
                number
                cavities
            }
            model{
                _id
                name
            }
            time
            cycles
            capacity
            user
            createdAt
            updatedAt
        }
    }`
}

const deleteProgram = {
  query: `mutation
    DeleteProgram($_id: ID, $user: ID ){
            deleteProgram(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newProgram, updateProgram, deleteProgram }
