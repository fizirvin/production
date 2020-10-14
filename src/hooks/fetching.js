import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Fetching(fetch, store) {
  const { loading, items, error } = useSelector((state) => state[store])
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('aplicando el effect')
    dispatch(fetch()).then((response) => {
      console.log(response)
    })
  }, [dispatch, fetch])

  console.log('me rendericé yo Fetching')
  const message = 'holaaa'
  return { message, loading, items, error }
}
