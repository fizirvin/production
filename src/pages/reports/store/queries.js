const query = {
  query: `query
    Reports( $page: Int, $add: Int ){
        reports( page:$page, add:$add ){
            total    
            items{
                _id
                date
                shift
                machine{
                    _id
                    number
                }
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
                purge
                comments
                team
                oper
                insp
                production{
                    program
                    molde
                    model
                    real
                    ng
                    ok
                    plan
                    prod
                    cycles
                    wtime
                    dtime
                    avail
                    perf
                    qual
                    oee
                }
                downtimes{
                    issue
                    mins
                }
                ngs{
                    defect
                    model
                    molde
                    pieces
                }
                resines{
                    resine
                    purge
                }
                progrs
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export default query
