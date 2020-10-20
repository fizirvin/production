const query = {
  query: `query {
        profiles{
            total    
            items{
                _id
                number
                firstname
                lastname
                gender
                entry
                department
                area
                team
                position
                active
                createdAt
                updatedAt
                user
                picture_URL
            }
        }
    }`
}

export default query
