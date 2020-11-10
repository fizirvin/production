const query = {
  query: `query 
    Profiles( $page: Int, $add: Int ){
        profiles( page:$page, add:$add ){
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
