export const NUMBER_INPUT = 'NUMBER_INPUT'
export const SERIAL_INPUT = 'SERIAL_INPUT'
export const CAVITIES_INPUT = 'CAVITIES_INPUT'
export const LIFECYCLES_INPUT = 'LIFECYCLES_INPUT'
export const TCYCLES_INPUT = 'TCYCLES_INPUT'
export const SHOT_INPUT = 'SHOT_INPUT'
export const QUANTITY_INPUT = 'QUANTITY_INPUT'

const changeInput = (name, input) => {
  return {
    type: name,
    payload: input
  }
}

export const changeTextInput = (name, input) => (dispatch) => {
  dispatch(changeInput(name, input))
}

export const changeNumberInput = (name, input) => (dispatch) => {
  dispatch(changeInput(name, input))
}
