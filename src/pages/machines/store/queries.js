const query = {
  query: `query
    Machines( $page: Int, $add: Int ){
        machines( page:$page, add:$add ){
            total
            items{
                _id
                number
                serial
                closingForce
                spindleDiameter
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
