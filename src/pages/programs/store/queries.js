const query = {
  query: `query 
  Programs( $page: Int, $add: Int ){
    programs( page:$page, add:$add ){
            total
            items{
                _id
                machine{
                    _id
                    number
                }
                molde{
                    _id
                    number
                    
                }
                model{
                    _id
                    name
                }
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
