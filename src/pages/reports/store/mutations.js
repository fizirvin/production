const newReport = {
  query: `mutation
    NewReport( $input: NewReport ){
        newReport(input: $input){
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
    }`
}

const updateReport = {
  query: `mutation
    UpdateMaterial($_id: ID, $input: NewMaterial ){
        updateMaterial(_id: $_id, input: $input){
            _id
            number
            manufacturer
            description
            acronym
            identification
            type
            unit
            color
        }
    }`
}

const removeReport = {
  query: `mutation
    UpdateMaterial($_id: ID, $input: NewMaterial ){
        updateMaterial(_id: $_id, input: $input){
            _id
            number
            manufacturer
            description
            acronym
            identification
            type
            unit
            color
        }
    }`
}

export { newReport, updateReport, removeReport }
