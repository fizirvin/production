const query = {
  query: `query
    Outgoings( $page: Int, $add: Int ){
        outgoings( page:$page, add:$add ){
            total
            items{
                _id
                date
                shift
                team
                machine{
                    _id
                    number
                }
                molde{
                    _id
                    number
                }
                operator{
                    _id
                    firstname
                }
                spare{
                    _id
                    name
                    code
                }
                spCode
                rep
                op
                quantity
                
                image
                description
                repairman{
                    _id
                    firstname
                    lastname
                }
                method
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
