export default function onDecimal(num) {
  const value = parseFloat(num)
  // const pattern = /[0-9]/g
  // const number = pattern.test(num)

  // const pattern2 = /^[0][1-9]$/g
  // const startWithZero = pattern2.test(prev.toString() + value.toString())
  if (num === '0') {
    return 0
  }
  if (value) {
    return value
  }
  return ''
}
