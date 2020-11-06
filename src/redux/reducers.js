import { combineReducers } from 'redux'

import defects from 'pages/defects/store/reducers'
import defectsForm from 'pages/defects/forms/formReducer'
import issues from 'pages/issues/store/reducers'
import issuesForm from 'pages/issues/forms/formReducer'
import machines from 'pages/machines/store/reducers'
import machinesForm from 'pages/machines/forms/formReducer'
import materials from 'pages/material/store/reducers'
import materialsForm from 'pages/material/forms/formReducer'
import moldes from 'pages/moldes/store/reducers'
import moldesForm from 'pages/moldes/forms/formReducer'
import models from 'pages/parts/store/reducers'
import modelsForm from 'pages/parts/forms/formReducer'
import programs from 'pages/programs/store/reducers'
import programsForm from 'pages/programs/forms/formReducer'
import shots from 'pages/shots/store/reducers'
import shotsForm from 'pages/shots/forms/formReducer'
import profiles from 'pages/workers/store/reducers'
import profilesForm from 'pages/workers/forms/formReducer'
import users from 'pages/users/store/reducers'
import usersForm from 'pages/users/forms/formReducer'
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
  programsForm,
  shotsForm,
  usersForm,
  profilesForm,
  user
})

export default reducers
