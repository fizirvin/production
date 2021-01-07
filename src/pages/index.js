import Calendar from './calendar'
import Home from './home'
import Production from './production'

import Issues, { AddIssue, RemoveIssue, UpdateIssue } from './issues'
import Machines, { AddMachine, RemoveMachine, UpdateMachine } from './machines'
import Materials, {
  AddMaterial,
  RemoveMaterial,
  UpdateMaterial
} from './material'
import Models, { AddModel, RemoveModel, UpdateModel } from './parts'
import Moldes, { AddMolde, RemoveMolde, UpdateMolde } from './moldes'
import Programs, { AddProgram, RemoveProgram, UpdateProgram } from './programs'
import Reports, { AddReport, RemoveReport, UpdateReport } from './reports'
import Shots, { AddShot, RemoveShot, UpdateShot, Cycles } from './shots'
import Users, { AddUser, RemoveUser, UpdateUser } from './users'
import Workers, { AddWorker, RemoveWorker, UpdateWorker } from './workers'
import Locations, { AddLocation, UpdateLocation } from './locations'
import Defects, { AddDefect, RemoveDefect, UpdateDefect } from './defects'

export {
  Calendar,
  Defects,
  Home,
  Issues,
  Machines,
  Materials,
  Models,
  Moldes,
  Production,
  Programs,
  Reports,
  Shots,
  Users,
  Workers,
  AddDefect,
  AddIssue,
  AddMachine,
  AddMaterial,
  AddModel,
  AddMolde,
  AddProgram,
  AddReport,
  AddShot,
  AddUser,
  AddWorker,
  RemoveDefect,
  RemoveIssue,
  RemoveMachine,
  RemoveMaterial,
  RemoveModel,
  RemoveMolde,
  RemoveProgram,
  RemoveReport,
  RemoveShot,
  RemoveUser,
  RemoveWorker,
  UpdateDefect,
  UpdateIssue,
  UpdateMachine,
  UpdateMaterial,
  UpdateModel,
  UpdateMolde,
  UpdateProgram,
  UpdateReport,
  UpdateShot,
  UpdateUser,
  UpdateWorker,
  Cycles,
  Locations,
  AddLocation,
  UpdateLocation
}
