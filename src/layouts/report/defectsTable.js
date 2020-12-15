import React from 'react'
import { useSelector } from 'react-redux'
import RenderDefects from './renderDefects'
import { DefectTable, TableHeader } from './styles'

export default function DefectsTable({ onNgs, programs }) {
  const production = useSelector((state) => state['reportsForm']['production'])

  return production.map((item) => {
    const program = programs.find((prog) => prog._id === item.program)
    const molde = program ? program.molde.number : ''
    const model = program ? program.model.name : ''

    return (
      <DefectTable key={item.program}>
        <thead>
          <tr>
            <TableHeader colSpan="2">
              {molde}-{model}
            </TableHeader>
          </tr>
          <tr>
            <TableHeader w={'80'}>Defect</TableHeader>
            <TableHeader w={'20'}>pcs</TableHeader>
          </tr>
        </thead>
        <tbody>
          <RenderDefects molde={item.molde} model={item.model} onNgs={onNgs} />
        </tbody>
      </DefectTable>
    )
  })
}
