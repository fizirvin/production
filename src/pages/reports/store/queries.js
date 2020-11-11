const query = {
  query: `query
    Reports( $page: Int, $add: Int ){
        reports( page:$page, add:$add ){
            total    
            items{
                _id
                date
                shift
                machine
                real
                ng
                ok
                plan
                tprod
                cycles
                ptime
                wtime
                dtime
                avail
                perf
                qual
                oee
                user
                team
                purge
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
