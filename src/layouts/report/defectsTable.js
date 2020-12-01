import React from 'react'
import { useSelector } from 'react-redux'
import RenderDefects from './renderDefects'
import { DefectTable, TableHeader } from './styles'

export default function DefectsTable({ onNgs }) {
  const production = useSelector((state) => state['reportsForm']['production'])

  return production.map((item) => {
    return (
      <DefectTable key={item.program}>
        <thead>
          <tr>
            <TableHeader colSpan="2">
              {item.molde.number}-{item.model.name}
            </TableHeader>
          </tr>
          <tr>
            <TableHeader w={'80'}>Defect</TableHeader>
            <TableHeader w={'20'}>pcs</TableHeader>
          </tr>
        </thead>
        <tbody>
          <RenderDefects
            molde={item.molde._id}
            model={item.model._id}
            onNgs={onNgs}
          />
        </tbody>
      </DefectTable>
    )
  })
}
