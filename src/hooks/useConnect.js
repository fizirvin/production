import { useSelector } from 'react-redux'

export default function useConnect(store) {
  const { loading, items, error } = useSelector((state) => state[store])

  console.log('estoy conectado')
  return { loading, items, error }
}
