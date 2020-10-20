import { combineReducers } from 'redux'
import { reducer as defects } from 'pages/defects'
import { reducer as issues } from 'pages/issues'
import { reducer as machines } from 'pages/machines'
import { reducer as materials } from 'pages/material'
import { reducer as moldes } from 'pages/moldes'
import { reducer as models } from 'pages/parts'
import { reducer as programs } from 'pages/programs'
import { reducer as shots } from 'pages/shots'
import { reducer as profiles } from 'pages/workers'
import { reducer as users } from 'pages/users'

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
  users
})

export default reducers
