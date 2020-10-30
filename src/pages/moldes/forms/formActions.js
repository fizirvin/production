export const NUMBER_INPUT = 'NUMBER_INPUT'

const changeInput = (input, name) => {
  return {
    type: name,
    payload: input
  }
}

export const changeStringInput = (input, name) => (dispatch) => {
  dispatch(changeInput(input, name))
}
