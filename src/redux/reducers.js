import { combineReducers } from 'redux'
import { reducer as defects, formReducer as defectsForm } from 'pages/defects'
import { reducer as issues, formReducer as issuesForm } from 'pages/issues'
import {
  reducer as machines,
  formReducer as machinesForm
} from 'pages/machines'
import {
  reducer as materials,
  formReducer as materialsForm
} from 'pages/material'
import { reducer as moldes, formReducer as moldesForm } from 'pages/moldes'
import { reducer as models, formReducer as modelsForm } from 'pages/parts'
import { reducer as programs } from 'pages/programs'
import { reducer as shots } from 'pages/shots'
import { reducer as profiles } from 'pages/workers'
import { reducer as users } from 'pages/users'
import user from './userReducer'

const reducers = combineReducers({
  defects,
  issues,
  machines,
  materials,
  moldes,
  models,
  programs,
  shots,
  profiles,
  users,
  moldesForm,
  defectsForm,
  issuesForm,
  machinesForm,
  materialsForm,
  modelsForm,
  user
})

export default reducers
