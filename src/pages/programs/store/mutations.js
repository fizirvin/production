const newProgram = {
  query: `mutation
    NewProgram( $input: NewProgram ){
        newProgram(input: $input){
            _id
            machine{
                _id
                number
            }
            molde{
                _id
                number
                cavities
            }
            model{
                _id
                name
            }
            time
            cycles
            capacity
            user
            createdAt
            updatedAt
        }
    }`
}

const updateProgram = {
  query: `mutation
    UpdateProgram($_id: ID, $input: UpdateProgram ){
        updateProgram(_id: $_id, input: $input){
            _id
            machine{
                _id
                number
            }
            molde{
                _id
                number
                cavities
            }
            model{
                _id
                name
            }
            time
            cycles
            capacity
            user
            createdAt
            updatedAt
        }
    }`
}

const removeProgram = {
  query: `mutation
    UpdateProgram($_id: ID, $input: NewProgram ){
        updateProgram(_id: $_id, input: $input){
            _id
            machineNumber {
            _id
            machineNumber
            machineSerial
            }
            moldeNumber {
            _id
            moldeNumber
            moldeSerial
            cavities
            }
            partNumber {
            _id
            partNumber
            partName
        
            }
            cycleTime
            cycles
            capacity
        }
    }`
}

export { newProgram, updateProgram, removeProgram }
