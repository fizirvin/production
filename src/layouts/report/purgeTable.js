import React from 'react'
import { useSelector } from 'react-redux'
import PurgeInput from './purgeInput'
import { DefectTable, TableHeader } from './styles'

export default function PurgeTable({ onResine }) {
  const materials = useSelector((state) => state['materials']['items']) || []

  const renderMaterials = () => {
    return materials.map((material) => (
      <PurgeInput key={material._id} material={material} onResine={onResine} />
    ))
  }

  return (
    <DefectTable>
      <thead>
        <tr>
          <TableHeader w={'80'}>Resine</TableHeader>
          <TableHeader w={'20'}>Purge (g)</TableHeader>
        </tr>
      </thead>
      <tbody>{renderMaterials()}</tbody>
    </DefectTable>
  )
}
