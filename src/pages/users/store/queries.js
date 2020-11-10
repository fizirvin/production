const query = {
  query: `query
    Users( $page: Int, $add: Int ){
        users( page:$page, add:$add ){
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
