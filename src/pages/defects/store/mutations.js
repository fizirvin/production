const newDefect = {
  query: `mutation
    NewDefect( $input: NewDefect ){
        newDefect(input: $input){
            _id
            name
            code
            injection
            user
            createdAt
        }
    }`
}

const updateDefect = {
  query: `mutation
UpdateDefect($_id: ID, $input: UpdateDefect ){
    updateDefect(_id: $_id, input: $input){
        _id
        name
        code
        injection
        user
        createdAt
        }
    }`
}

const deleteDefect = {
  query: `mutation
    DeleteDefect($_id: ID, $user: ID ){
            deleteDefect(_id: $_id, user: $user){
                  _id
              }
          }`
}
export { updateDefect, newDefect, deleteDefect }
