const query = {
  query: `query {
        defects{
            _id
            defectName
            defectCode
            isInjection
        }
    }`
}

export default query
