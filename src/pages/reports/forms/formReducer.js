import {
  DATE_INPUT_REPORT,
  SHIFT_INPUT_REPORT,
  MACHINE_INPUT_REPORT,
  PLAN_TIME_INPUT_REPORT,
  REAL_INPUT_REPORT,
  NG_INPUT_REPORT,
  OK_INPUT_REPORT,
  PLAN_INPUT_REPORT,
  TPROD_INPUT_REPORT,
  CYCLES_INPUT_REPORT,
  WTIME_INPUT_REPORT,
  DTIME_INPUT_REPORT,
  AVAIL_INPUT_REPORT,
  PERF_INPUT_REPORT,
  QUAL_INPUT_REPORT,
  OEE_INPUT_REPORT,
  PURGE_INPUT_REPORT,
  COMMENTS_INPUT_REPORT,
  TEAM_INPUT_REPORT,
  OPER_INPUT_REPORT,
  INSP_INPUT_REPORT,
  CLEAN_INPUTS_REPORT,
  SELECT_INPUTS_REPORTS,
  PRODUCTION_INPUT_REPORT,
  RESINES_INPUT_REPORT,
  DOWNTIMES_INPUT_REPORT,
  NGS_INPUT_REPORT
} from './formActions'

const initialState = {
  date: '',
  shift: '',
  machine: '',
  real: 0,
  ng: 0,
  ok: 0,
  plan: 0,
  tprod: 0,
  cycles: 0,
  ptime: 10,
  wtime: 0.0,
  dtime: 0.0,
  avail: 0.0,
  perf: 0.0,
  qual: 0.0,
  oee: 0.0,
  purge: 0,
  comments: '',
  team: '',
  oper: '',
  insp: '',
  production: [],
  downtimes: [],
  ngs: [],
  resines: []
}

const formReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case DATE_INPUT_REPORT:
      return {
        ...state,
        date: payload
      }
    case SHIFT_INPUT_REPORT:
      return {
        ...state,
        shift: payload
      }
    case MACHINE_INPUT_REPORT:
      return {
        ...state,
        machine: payload
      }
    case PLAN_TIME_INPUT_REPORT:
      return {
        ...state,
        ptime: payload
      }
    case REAL_INPUT_REPORT:
      return {
        ...state,
        real: payload
      }
    case NG_INPUT_REPORT:
      return {
        ...state,
        ng: payload
      }
    case OK_INPUT_REPORT:
      return {
        ...state,
        ok: payload
      }
    case PLAN_INPUT_REPORT:
      return {
        ...state,
        plan: payload
      }
    case TPROD_INPUT_REPORT:
      return {
        ...state,
        tprod: payload
      }
    case CYCLES_INPUT_REPORT:
      return {
        ...state,
        cycles: payload
      }
    case WTIME_INPUT_REPORT:
      return {
        ...state,
        wtime: payload
      }
    case DTIME_INPUT_REPORT:
      return {
        ...state,
        dtime: payload
      }
    case AVAIL_INPUT_REPORT:
      return {
        ...state,
        avail: payload
      }
    case PERF_INPUT_REPORT:
      return {
        ...state,
        perf: payload
      }
    case QUAL_INPUT_REPORT:
      return {
        ...state,
        qual: payload
      }
    case OEE_INPUT_REPORT:
      return {
        ...state,
        oee: payload
      }
    case PURGE_INPUT_REPORT:
      return {
        ...state,
        purge: payload
      }
    case COMMENTS_INPUT_REPORT:
      return {
        ...state,
        comments: payload
      }
    case TEAM_INPUT_REPORT:
      return {
        ...state,
        team: payload
      }
    case OPER_INPUT_REPORT:
      return {
        ...state,
        oper: payload
      }
    case INSP_INPUT_REPORT:
      return {
        ...state,
        insp: payload
      }
    case PRODUCTION_INPUT_REPORT:
      const real = payload.reduce((a, b) => {
        return a + b.real || 0
      }, 0)
      const ng = payload.reduce((a, b) => {
        return a + b.ng || 0
      }, 0)
      const ok = payload.reduce((a, b) => {
        return a + b.ok || 0
      }, 0)
      const plan = payload.reduce((a, b) => {
        return a + b.plan || 0
      }, 0)
      const tprod = payload.reduce((a, b) => {
        return a + b.prod || 0
      }, 0)
      const cycles = payload.reduce((a, b) => {
        return a + b.cycles || 0
      }, 0)
      const wtime = payload.reduce((a, b) => {
        return a + b.wtime || 0
      }, 0)
      const dtime = payload.reduce((a, b) => {
        return a + b.dtime || 0
      }, 0)
      const productionTime = parseFloat(wtime + dtime)
      const preav = parseFloat((wtime / productionTime) * 100)

      const preperf = (real / tprod) * 100
      const perf = parseFloat(preperf.toFixed(2))
      const avail = parseFloat(preav.toFixed(2))
      const preq = (ok / real) * 100
      const qual = parseFloat(preq.toFixed(2))
      const preoee = (avail * perf * qual) / 10000
      const oee = parseFloat(preoee.toFixed(2))

      return {
        ...state,
        real,
        ng,
        ok,
        plan,
        tprod,
        cycles,
        wtime,
        dtime,
        avail,
        perf,
        qual,
        oee,
        production: payload
      }
    case RESINES_INPUT_REPORT:
      const purge = payload.reduce((a, b) => {
        return a + b.purge || 0
      }, 0)
      return {
        ...state,
        purge,
        resines: payload
      }
    case DOWNTIMES_INPUT_REPORT:
      return {
        ...state,
        downtimes: payload
      }
    case NGS_INPUT_REPORT:
      return {
        ...state,
        ngs: payload
      }
    case CLEAN_INPUTS_REPORT:
      return initialState
    case SELECT_INPUTS_REPORTS:
      return payload
    default:
      return state
  }
}

export default formReducer
