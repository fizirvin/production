const query = {
  query: `query
    Defects( $page: Int, $add: Int ){
        defects( page:$page, add:$add ){
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
