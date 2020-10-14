const newMolde = {
  query: `mutation
    NewMolde( $input: NewMolde ){
        newMolde(input: $input){
            _id
            moldeNumber
            moldeSerial
            cavities
            lifecycles
            tcycles
            shot
            quantity
            active
        }
    }`
}

const updateMolde = {
  query: `mutation
UpdateMolde($_id: ID, $input: NewMolde ){
    updateMolde(_id: $_id, input: $input){
            _id
            moldeNumber
            moldeSerial
            cavities
            lifecycles
            tcycles
            shot
            quantity
            active
        }
    }`
}

const removeMolde = {
  query: `mutation
UpdateMolde($_id: ID, $input: NewMolde ){
    updateMolde(_id: $_id, input: $input){
            _id
            moldeNumber
            moldeSerial
            cavities
            lifecycles
            tcycles
            shot
            quantity
            active
        }
    }`
}

export { newMolde, removeMolde, updateMolde }
