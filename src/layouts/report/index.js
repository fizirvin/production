import React, { useState } from 'react'
import ReportTable from './table'
import SwitchSection from './switchSection'
import DefectsTable from './defectsTable'
import DowntimeTable from './downtimeTable'
import { SectionTwo, SectionContainer } from './styles'

export default function Report({ items = [], programs = [], name }) {
  const [section, setSection] = useState('defects')
  const onSwitch = (e) => {
    const { name } = e.target
    setSection(name)
  }
  return (
    <>
      <ReportTable items={items} programs={programs} name={name} />
      <SwitchSection onClick={onSwitch} />
      <SectionTwo>
        <SectionContainer>
          {section === 'defects' && <DefectsTable />}
          {section === 'downtime' && <DowntimeTable />}
        </SectionContainer>
      </SectionTwo>
    </>
  )
}
