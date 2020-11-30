import React, { useState } from 'react'
import ReportTable from './table'
import SwitchSection from './switchSection'
import DefectsTable from './defectsTable'
import DowntimeTable from './downtimeTable'
import PurgeTable from './purgeTable'
import Comments from './comments'
import Team from './team'
import { SectionTwo, SectionContainer } from './styles'

export default function Report({
  items = [],
  programs = [],
  name,
  onTeam,
  onOper,
  onInsp
}) {
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
          {section === 'purge' && <PurgeTable />}
        </SectionContainer>
        <div>
          <Comments />
          <Team onTeam={onTeam} onOper={onOper} onInsp={onInsp} />
        </div>
      </SectionTwo>
    </>
  )
}
