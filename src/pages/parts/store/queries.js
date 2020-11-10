const query = {
  query: `query
    Models( $page: Int, $add: Int ){
        models( page:$page, add:$add ){
            total
            items {
                _id
                number
                name
                family
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
