const query = {
  query: `query
    Shots( $page: Int, $add: Int ){
        shots( page:$page, add:$add ){
            total    
            items{
                _id
                molde{
                    _id
                    number
                }
                date
                shift
                quantity
                end
                shiftEnd
                active
                comments
                user
                createdAt
                updatedAt
            }
        }
    }`
}

const cyclesQuery = {
  query: `query 
    Cycles( $shot: ID){
        cycles(shot: $shot){
            _id
            date 
            shift 
            machine  
            real
            cycles
            quantity
        }
    }`
}

export default query
export { cyclesQuery }
