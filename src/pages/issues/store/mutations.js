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
    UpdateIssue($_id: ID, $input: NewIssue ){
        updateIssue(_id: $_id, input: $input){
            _id
            issueName
            issueCode
        }
    }`
}

const removeIssue = {
  query: `mutation
    UpdateIssue($_id: ID, $input: NewIssue ){
        updateIssue(_id: $_id, input: $input){
            _id
            issueName
            issueCode
        }
    }`
}

export { newIssue, removeIssue, updateIssue }
