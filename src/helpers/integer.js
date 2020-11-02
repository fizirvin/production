export default function onInteger(num, prev) {
  const pattern = /[0-9]/g
  const number = pattern.test(num)

  // const pattern2 = /^[0][1-9]$/g
  // const startWithZero = pattern2.test(prev.toString() + value.toString())
  if (number && prev === 0) {
    return ''
  }
  if (number) {
    const value = parseInt(num)
    return value
  }
  return ''
}
