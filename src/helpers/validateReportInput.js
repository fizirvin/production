export default function validateReportInput(input) {
  if (
    !input.date ||
    !input.machine ||
    !input.shift ||
    !input.ptime ||
    !input.team ||
    !input.insp ||
    !input.oper
  ) {
    return { valid: false, message: `invalid, check report` }
  }
  if (input.production.length === 0) {
    return { valid: false, message: `invalid, choose a program` }
  }
  if (
    input.production.length > 0 &&
    input.production.reduce((a, b) => {
      return a + b.real
    }, 0) === 0
  ) {
    return { valid: false, message: `invalid, real production` }
  }
  if (
    input.ngs.length > 0 &&
    input.ngs.reduce((a, b) => {
      return a + b.pieces
    }, 0) === 0
  ) {
    return { valid: false, message: `invalid defects report` }
  }
  if (
    input.downtimes.length > 0 &&
    input.downtimes.reduce((a, b) => {
      return a + b.mins
    }, 0) === 0
  ) {
    return { valid: false, message: `invalid, downtime report` }
  }
  if (
    input.resines.length > 0 &&
    input.resines.reduce((a, b) => {
      return a + b.purge
    }, 0) === 0
  ) {
    return { valid: false, message: `invalid, purge report` }
  }

  const items = Object.keys(input)
  const checks = items.map((key) => {
    const value = input[key]
    if (value === undefined) {
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
