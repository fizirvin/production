export default function onKey(e) {
  const { key } = e
  if (key === '-' || key === '+' || key === 'e' || key === '.')
    return (e.target.value = '')
}
