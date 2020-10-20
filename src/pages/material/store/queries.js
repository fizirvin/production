const query = {
  query: `query {
        materials{
            total    
            items{
                _id
                number
                manufacturer
                description
                acronym
                identification
                type
                unit
                color
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
