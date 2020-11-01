import { useSelector } from 'react-redux'

export default function useConnect(reducer) {
  const { moldesForm } = useSelector((state) => state)

  console.log('estoy conectado')
  return { moldesForm }
}
