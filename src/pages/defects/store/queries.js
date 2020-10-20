const query = {
  query: `query {
        defects{
            total
            items{
                _id
                name
                code
                injection
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
