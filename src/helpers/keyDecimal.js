export default function onKeyDecimal(e) {
  const { key } = e
  if (key === '-' || key === '+' || key === 'e') return (e.target.value = '')
}
