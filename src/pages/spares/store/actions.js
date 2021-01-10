import query from './queries'
import { newSpare, updateSpare, deleteSpare } from './mutations'
import { fetchItems } from 'services'
import { validateInput } from 'helpers'
import { uploadImage, deleteImage } from '../../../firebase'

export const REQUEST_SPARES = 'REQUEST_SPARES'
export const REQUEST_FAILURE_SPARES = 'REQUEST_FAILURE_SPARES'
export const FETCH_SUCCESS_SPARES = 'FETCH_SUCCESS_SPARES'
export const ADD_SUCCESS_SPARES = 'ADD_SUCCESS_SPARES'
export const UPDATE_SUCCESS_SPARES = 'UPDATE_SUCCESS_SPARES'
export const REMOVE_SUCCESS_SPARES = 'REMOVE_SUCCESS_SPARES'

export const CLEAN_MESSAGE_SPARES = 'CLEAN_MESSAGE_SPARES'
export const PAGE_TOTAL_SPARES = 'PAGE_SPARES'
export const ADD_TOTAL_SPARES = 'ADD_TOTAL_SPARES'

export const SORT_SPARES = 'SORT_SPARES'

const request = () => {
  return {
    type: REQUEST_SPARES
  }
}

const requestFailure = (message) => {
  return {
    type: REQUEST_FAILURE_SPARES,
    payload: message
  }
}

const fetchSuccess = (items) => {
  return {
    type: FETCH_SUCCESS_SPARES,
    payload: items
  }
}

const addSuccess = (item) => {
  return {
    type: ADD_SUCCESS_SPARES,
    payload: item
  }
}

const updateSuccess = (item) => {
  return {
    type: UPDATE_SUCCESS_SPARES,
    payload: item
  }
}

const removeSuccess = (id) => {
  return {
    type: REMOVE_SUCCESS_SPARES,
    payload: id
  }
}

export const fetchSpares = (page) => async (dispatch) => {
  dispatch(request())
  query.variables = { page }
  const { status, data } = await fetchItems(query)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (page) {
      dispatch({ type: PAGE_TOTAL_SPARES, payload: page })
    }
    dispatch(fetchSuccess(data.spares))
  }
}

export const addSpare = (input) => async (dispatch) => {
  const spare = {
    code: input.code,
    name: input.name,
    number: input.number,
    optimal: input.optimal,
    location: input.location,
    user: input.user
  }
  const { valid, message } = validateInput(spare)
  if (valid) {
    dispatch(request())
    newSpare.variables = { input: spare }
    const { status, data } = await fetchItems(newSpare)
    if (!status) {
      dispatch(requestFailure(data))
    } else {
      const { newSpare } = data

      if (input.file) {
        const task = uploadImage(input.file)
        const onProgress = () => {}
        const onError = (err) => {
          console.log(err)
        }

        const onComplete = () => {
          task.snapshot.ref.getDownloadURL().then(async (url) => {
            const spare = {
              image: url
            }

            updateSpare.variables = { _id: newSpare._id, input: spare }
            const { status, data } = await fetchItems(updateSpare)

            if (!status) {
              dispatch(requestFailure(data))
            } else {
              dispatch(addSuccess({ ...newSpare, image: url }))
            }
          })
        }

        task.on('state_changed', onProgress, onError, onComplete)
      } else {
        dispatch(addSuccess(newSpare))
      }
    }
  } else {
    dispatch(requestFailure(message))
  }
}

export const modifySpare = (input) => async (dispatch) => {
  dispatch(request())

  const spare = {
    code: input.code,
    name: input.name,
    number: input.number,
    optimal: input.optimal,
    location: input.location
  }

  updateSpare.variables = { _id: input._id, input: spare }
  const { status, data } = await fetchItems(updateSpare)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (input.file) {
      if (!input.image) {
        const task = uploadImage(input.file)
        const onProgress = () => {}
        const onError = (err) => {
          console.log(err)
        }

        const onComplete = () => {
          task.snapshot.ref.getDownloadURL().then(async (url) => {
            const spareImage = {
              image: url
            }

            updateSpare.variables = { _id: input._id, input: spareImage }
            const { status, data } = await fetchItems(updateSpare)

            if (!status) {
              dispatch(requestFailure(data))
            } else {
              const { updateSpare } = data
              dispatch(updateSuccess({ ...updateSpare, image: url }))
            }
          })
        }

        task.on('state_changed', onProgress, onError, onComplete)
      }
      if (input.image) {
        const deleting = await deleteImage(input.image)

        if (!deleting) {
          const { updateSpare } = data
          dispatch(updateSuccess(updateSpare))
        } else {
          const task = uploadImage(input.file)
          const onProgress = () => {}
          const onError = (err) => {
            console.log(err)
          }

          const onComplete = () => {
            task.snapshot.ref.getDownloadURL().then(async (url) => {
              const spare = {
                image: url
              }

              updateSpare.variables = { _id: input._id, input: spare }
              const { status, data } = await fetchItems(updateSpare)

              if (!status) {
                dispatch(requestFailure(data))
              } else {
                const { updateSpare } = data
                dispatch(updateSuccess({ ...updateSpare, image: url }))
              }
            })
          }

          task.on('state_changed', onProgress, onError, onComplete)
        }
      }
    } else {
      const { updateSpare } = data
      dispatch(updateSuccess(updateSpare))
    }
  }
}

export const eraseSpare = (input) => async (dispatch) => {
  dispatch(request())
  deleteSpare.variables = { _id: input._id, user: input.user }
  const { status, data } = await fetchItems(deleteSpare)

  if (!status) {
    dispatch(requestFailure(data))
  } else {
    if (input.image) {
      const deleting = await deleteImage(input.image)
      if (!deleting) {
        dispatch(removeSuccess(data.deleteSpare))
      } else {
        dispatch(removeSuccess(data.deleteSpare))
      }
    } else {
      dispatch(removeSuccess(data.deleteSpare))
    }
  }
}
