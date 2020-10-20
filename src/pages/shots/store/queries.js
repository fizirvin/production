const query = {
  query: `query {
        shots{
            total    
            items{
                _id
                molde
                date
                shift
                quantity
                end
                shiftEnd
                active
                comments
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
