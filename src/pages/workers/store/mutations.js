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

const updateProfile = {
  query: `mutation
  UpdateProfile($_id: ID, $input: UpdateProfile ){
        updateProfile(_id: $_id, input: $input){
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

const deleteProfile = {
  query: `mutation
    DeleteProfile($_id: ID, $user: ID ){
            deleteProfile(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newProfile, updateProfile, deleteProfile }
