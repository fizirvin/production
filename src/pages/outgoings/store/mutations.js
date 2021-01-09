const newOutgoing = {
  query: `mutation
    NewOutgoing( $input: NewOutgoing ){
      newOutgoing(input: $input){
        _id
        date
        shift
        team
        machine{
            _id
            number
        }
        molde{
            _id
            number
        }
        operator{
            _id
            firstname
        }
        spare{
            _id
            name
            code
        }
        spCode
                rep
                op
        quantity
        
        image
        description
        repairman{
            _id
            firstname
            lastname
        }
        method
        user
        createdAt
        updatedAt 
        }
    }`
}

const updateOutgoing = {
  query: `mutation
  UpdateOutgoing($_id: ID, $input: UpdateOutgoing ){
      updateOutgoing(_id: $_id, input: $input){
        _id
        date
        shift
        team
        machine{
            _id
            number
        }
        molde{
            _id
            number
        }
        operator{
            _id
            firstname
        }
        spare{
            _id
            name
            code
        }
        spCode
                rep
                op
        quantity
        
        image
        description
        repairman{
            _id
            firstname
            lastname
        }
        method
        user
        createdAt
        updatedAt  
        }
    }`
}

const deleteOutgoing = {
  query: `mutation
  DeleteOutgoing($_id: ID, $user: ID ){
      deleteOutgoing(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newOutgoing, updateOutgoing, deleteOutgoing }
