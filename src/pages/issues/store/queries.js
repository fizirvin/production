const query = {
  query: `
    query {
        issues{
            total
            items{
                _id
                name
                code
                user
                createdAt
                updatedAt
            }
        }
    }
`
}

export default query
