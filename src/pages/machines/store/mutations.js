const newMachine = {
  query: `mutation
    NewMachine( $input: NewMachine ){
        newMachine(input: $input){
            _id
            machineNumber
            machineSerial
            closingForce
            spindleDiameter
        }
    }`
}

const updateMachine = {
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
