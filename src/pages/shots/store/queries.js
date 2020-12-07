const query = {
  query: `query
    Shots( $page: Int, $add: Int ){
        shots( page:$page, add:$add ){
            total    
            items{
                _id
                molde
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
    Cycles( $cleaning: ID){
        cycles(cleaning: $cleaning){
            report
            date
            shift
            machine
            model
            molde
            real
            cycles
        }
    }`
}

export default query
export { cyclesQuery }
