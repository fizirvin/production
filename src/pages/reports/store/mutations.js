const newReport = {
  query: `mutation
    NewReport( $input: NewShot ){
        newReport(input: $input){
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
