const query = {
  query: `query {
        moldes{
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

const tcyclesQuery = {
  query: `query {
        tcycles{
            molde
            tcycles
        }
    }`
}

export { query, tcyclesQuery }
