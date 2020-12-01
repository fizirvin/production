import React from 'react'
import { useSelector } from 'react-redux'
import DefectInput from './defectInput'

export default function RenderDefects({ molde, model, onNgs }) {
  const defects = useSelector((state) => state['defects']['items']).filter(
    (defect) => defect.injection === true
  )

  return defects.map((defect) => (
    <DefectInput
      key={defect._id}
      defect={defect}
      molde={molde}
      model={model}
      onNgs={onNgs}
    />
  ))
}
