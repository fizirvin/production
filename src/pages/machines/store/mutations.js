const newMachine = {
  query: `mutation
    NewMachine( $input: NewMachine ){
        newMachine(input: $input){
            _id
            number
            serial
            closingForce
            spindleDiameter
            user
            createdAt    
        }
    }`
}

const updateMachine = {
  query: `mutation
    UpdateMachine($_id: ID, $input: UpdateMachine ){
        updateMachine(_id: $_id, input: $input){
            _id
            number
            serial
            closingForce
            spindleDiameter
            user
            createdAt  
        }
    }`
}

const deleteMachine = {
  query: `mutation
    DeleteMachine($_id: ID, $user: ID ){
            deleteMachine(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newMachine, updateMachine, deleteMachine }
