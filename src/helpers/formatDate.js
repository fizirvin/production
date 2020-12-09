export default function formatDate(aDate) {
  const date = new Date(aDate)
  const y = date.getFullYear()
  const d = date.getDate()
  const m = date.getMonth() + 1

  function M() {
    if (m < 10) {
      return '0' + m
    } else {
      return m
    }
  }

  function D() {
    if (d < 10) {
      return '0' + d
    } else {
      return d
    }
  }

  const formatD = D()
  const formatM = M()
  const format = y + '-' + formatM + '-' + formatD
  return format
}
