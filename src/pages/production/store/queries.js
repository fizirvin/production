const query = {
  query: `query
    Production( $today: String, $filter: String, $period: String, $shifts: String ){
      production( today: $today, filter: $filter, period: $period, shifts: $shifts){
        row
        data {
          date
          field
          value
        }
        subData{
          row
          data{
            date
            field
            value
          }
        }
        second{
          row
          data{
            date
            field
            value
          }
          second{
            row
            data {
              date
              field
              value
            }
          }
        }  
                
              
      }
    }`
}

export default query
