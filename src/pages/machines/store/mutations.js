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

const removeMachine = {
  query: `mutation
    UpdateMachine($_id: ID, $input: NewMachine ){
        updateMachine(_id: $_id, input: $input){
            _id
            machineNumber
            machineSerial
            closingForce
            spindleDiameter
        }
    }`
}

export { newMachine, updateMachine, removeMachine }
