const query = {
  query: `query 
    Issues( $page: Int, $add: Int ){
        issues( page:$page, add:$add ){
            total
            items{
                _id
                name
                code
                user
                createdAt
                updatedAt
            }
        }
    }
`
}

export default query
