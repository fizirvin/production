const query = {
  query: `query
    Shots( $page: Int, $add: Int ){
        shots( page:$page, add:$add ){
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
