const query = {
  query: `query 
    Materials( $page: Int, $add: Int ){
        materials( page:$page, add:$add ){
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
