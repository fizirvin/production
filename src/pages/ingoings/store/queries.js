const query = {
  query: `query
    Ingoings( $page: Int, $add: Int ){
        ingoings( page:$page, add:$add ){
            total
            items{
                _id
                date
                quantity
                origin
                provider
                price
                spare{
                    _id
                    code
                    name
                }
                spCode
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
