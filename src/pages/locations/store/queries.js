const query = {
  query: `query
    Locations( $page: Int, $add: Int ){
        locations( page:$page, add:$add ){
            total
            items{
                _id
                code
                name
                area
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
