const query = {
  query: `query {
            users{
            total
            items{
                _id
                active
                level
                name
                createdAt
            }
        }
    }`
}

export default query
