import React from 'react'
import { useSelector } from 'react-redux'
import PurgeInput from './purgeInput'
import { DefectTable, TableHeader } from './styles'

export default function PurgeTable() {
  const materials = useSelector((state) => state['materials']['items']) || []

  const renderMaterials = () => {
    return materials.map((material) => (
      <PurgeInput key={material._id} material={material} />
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
