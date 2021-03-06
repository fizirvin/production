const newReport = {
  query: `mutation
    NewReport( $input: NewReport ){
        newReport(input: $input){
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
    }`
}

const updateReport = {
  query: `mutation
    UpdateReport($_id: ID, $input: UpdateReport ){
        updateReport(_id: $_id, input: $input){
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
    }`
}

const deleteReport = {
  query: `mutation
  DeleteReport($_id: ID, $user: ID ){
        deleteReport(_id: $_id, user: $user){
            _id
        }
    }`
}

export { newReport, updateReport, deleteReport }
