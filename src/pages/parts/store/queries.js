const query = {
  query: `query {
        models{
            total
            items {
                _id
                number
                name
                family
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
