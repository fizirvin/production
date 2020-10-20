const query = {
  query: `query {
        moldes{
            total
            items{
                _id
                number
                serial
                cavities
                lifecycles
                percent
                tcycles
                shot
                quantity
                active
                user
                createdAt
                updatedAt
            }
        }
    }`
}

export { query }
