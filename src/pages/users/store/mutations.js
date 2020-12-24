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
UpdateUser($_id: ID, $input: UpdateUser ){
    updateUser(_id: $_id, input: $input){
        _id
        active
        level
        name
        createdAt
        }
    }`
}

const deleteUser = {
  query: `mutation
    DeleteUser($_id: ID, $user: ID ){
            deleteUser(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newUser, deleteUser, updateUser }
