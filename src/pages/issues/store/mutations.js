const newIssue = {
  query: `mutation
    NewIssue( $input: NewIssue ){
        newIssue(input: $input){
            _id
            name
            code
            user
            createdAt
                
        }
    }`
}

const updateIssue = {
  query: `mutation
    UpdateIssue($_id: ID, $input: UpdateIssue ){
        updateIssue(_id: $_id, input: $input){
            _id
            name
            code
            user
            createdAt
        }
    }`
}

const deleteIssue = {
  query: `mutation
      DeleteIssue($_id: ID, $user: ID ){
        deleteIssue(_id: $_id, user: $user){
                _id
            }
        }`
}

export { newIssue, deleteIssue, updateIssue }
