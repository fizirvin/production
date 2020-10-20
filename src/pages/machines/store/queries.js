const query = {
  query: `query {
        machines{
            total
            items{
                _id
                number
                serial
                closingForce
                spindleDiameter
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
