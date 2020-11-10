const query = {
  query: `query
    Moldes( $page: Int, $add: Int ){
        moldes( page:$page, add:$add ){
            total
            items{
                _id
                number
                serial
                cavities
                lifecycles
                percent
                tcycles
                shot
                quantity
                active
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export { query }
