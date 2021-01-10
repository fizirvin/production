export const CODE_INPUT_SPARE = 'CODE_INPUT_SPARE'
export const NAME_INPUT_SPARE = 'NAME_INPUT_SPARE'
export const NUMBER_INPUT_SPARE = 'NUMBER_INPUT_SPARE'
export const OPTIMAL_INPUT_SPARE = 'OPTIMAL_INPUT_SPARE'
export const LOCATION_INPUT_SPARE = 'LOCATION_INPUT_SPARE'

export const FILE_INPUT_SPARE = 'FILE_INPUT_SPARE'
export const CLEAN_INPUTS_SPARE = 'CLEAN_INPUTS_SPARE'
export const SELECT_INPUTS_SPARE = 'SELECT_INPUTS_SPARE'

export const setFile = (file) => (dispatch) => {
  dispatch({ type: FILE_INPUT_SPARE, payload: file })
}
