import { useSelector } from 'react-redux'

export default function useConnect(reducer, input) {
  const { value } = useSelector((state) => state[reducer][input])

  console.log('estoy conectado')
  return { value }
}
