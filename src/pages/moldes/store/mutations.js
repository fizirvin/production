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

const deleteMolde = {
  query: `mutation
    DeleteMolde($_id: ID, $user: ID ){
            deleteMolde(_id: $_id, user: $user){
                  _id
              }
          }`
}

export { newMolde, deleteMolde, updateMolde }
