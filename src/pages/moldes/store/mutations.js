const newMolde = {
  query: `mutation
    NewMolde( $input: NewMolde ){
        newMolde(input: $input){
            _id
            number
            serial
            cavities
            lifecycles
            percent
            tcycles
            shot
            quantity
            active
            user
            createdAt
        }
    }`
}

const updateMolde = {
  query: `mutation
UpdateMolde($_id: ID, $input: UpdateMolde ){
    updateMolde(_id: $_id, input: $input){
        _id
        number
        serial
        cavities
        lifecycles
        percent
        tcycles
        shot
        quantity
        active
        user
        createdAt
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
