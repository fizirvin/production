const newUser = {
  query: `mutation
    NewUser($input: NewUser){
        newUser(input: $input){
            _id
            active
            level
            name
            createdAt
        }
    }`
}

const updateUser = {
  query: `mutation
UpdateUser($_id: ID, $input: UpdatedUser ){
    updateUser(_id: $_id, input: $input){
            _id
            shortCat
            fullUat
            fullCat
            active
            level
            name
        }
    }`
}

const removeUser = {
  query: `mutation
  UpdateUser($_id: ID, $input: UpdatedUser ){
      updateUser(_id: $_id, input: $input){
              _id
              shortCat
              fullUat
              fullCat
              active
              level
              name
          }
      }`
}

export { newUser, removeUser, updateUser }
