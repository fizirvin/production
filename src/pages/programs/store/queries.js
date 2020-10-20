const query = {
  query: `query {
        programs{
            total
            items{
                _id
                machine
                molde
                model
                time
                cycles
                capacity
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
