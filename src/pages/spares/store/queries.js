const query = {
  query: `query
    Spares( $page: Int, $add: Int ){
        spares( page:$page, add:$add ){
            total
            items{
                _id
                code
                name
                number
                image
                optimal
                stock
                price
                location{
                    _id
                    code
                    name
                }
                loCode
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
