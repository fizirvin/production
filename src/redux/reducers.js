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
import reports from 'pages/reports/store/reducers'
import reportsForm from 'pages/reports/forms/formReducer'
import locations from 'pages/locations/store/reducers'
import locationsForm from 'pages/locations/forms/formReducer'
import ingoings from 'pages/ingoings/store/reducers'
import ingoingsForm from 'pages/ingoings/forms/formReducer'
import outgoings from 'pages/outgoings/store/reducers'
import outgoingsForm from 'pages/outgoings/forms/formReducer'
import spares from 'pages/spares/store/reducers'
import sparesForm from 'pages/spares/forms/formReducer'
import cycles from 'pages/shots/cycles/cyclesReducer'
import production from 'pages/production/store/productionReducer'

import calendar from 'pages/calendar/store/reducers'

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
  user,
  reports,
  reportsForm,
  cycles,
  production,
  calendar,
  locations,
  locationsForm,
  spares,
  sparesForm,
  ingoings,
  ingoingsForm,
  outgoings,
  outgoingsForm
})

export default reducers
