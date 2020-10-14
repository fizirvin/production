import { database } from 'config'
const { url, options } = database

export default async function fetchItems(items, query) {
  options.body = JSON.stringify(query)
  const res = await fetch(url, options).catch(() => {
    return false
  })
  if (!res) return { status: false, data: 'fallo uno no hay internet' }
  const data = await res.json().catch(() => {
    return false
  })

  if (!data) return { status: false, data: 'algo pasó' }
  if (data.errors) return { status: false, data: data.errors[0].message }
  return { status: true, data: data.data[items] }
}
