const query = {
  query: `query{
    calendarcycles{
    _id
    molde
    items{
      date
      shift
      machine
      real
      cycles
      quantity
     status
      total
      percent
    }
  }
  }`
}

export default query
