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
  onInsp,
  machine
}) {
  const [section, setSection] = useState('defects')
  const onSwitch = (e) => {
    const { name } = e.target
    setSection(name)
  }
  return (
    <>
      {machine && <ReportTable items={items} programs={programs} name={name} />}
      {machine && <SwitchSection onClick={onSwitch} />}
      {machine && (
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
      )}
    </>
  )
}
