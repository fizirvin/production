export default function onNegativeKey(e) {
  const { key } = e
  if (key === '+' || key === 'e' || key === '.') return (e.target.value = '')
}
