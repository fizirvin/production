import { useSelector } from 'react-redux'

export default function useConnect(reducer, load) {
  const { input, user, loading } = useSelector((state) => {
    return {
      input: state[reducer],
      user: state.user.id,
      loading: state[load].loading
    }
  })

  return { input, user, loading }
}
