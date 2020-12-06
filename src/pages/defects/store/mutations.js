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

const removeDefect = {
  query: `mutation
  UpdateDefect($_id: ID, $input: NewDefect ){
      updateDefect(_id: $_id, input: $input){
              _id
              defectName
              defectCode
              isInjection
          }
      }`
}

export { updateDefect, newDefect, removeDefect }
