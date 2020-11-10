const query = {
  query: `query 
  Programs( $page: Int, $add: Int ){
    programs( page:$page, add:$add ){
            total
            items{
                _id
                machine
                molde
                model
                time
                cycles
                capacity
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
