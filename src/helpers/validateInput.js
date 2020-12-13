export default function validateInput(input) {
  const items = Object.keys(input)
  const checks = items.map((key) => {
    const value = input[key]
    if (!value) {
      return { valid: false, message: key }
    } else {
      return { valid: true }
    }
  })

  const notValid = checks.find((check) => !check.valid)
  if (notValid) {
    return { valid: false, message: `invalid, check ${notValid.message}` }
  } else {
    return { valid: true }
  }
}
