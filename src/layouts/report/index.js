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
  onProduction,
  onTeam,
  onOper,
  onInsp,
  onComments,
  onResine,
  onDowntime,
  onNgs,
  machine
}) {
  const [section, setSection] = useState('defects')
  const onSwitch = (e) => {
    const { name } = e.target
    setSection(name)
  }
  return (
    <>
      {machine && (
        <ReportTable
          items={items}
          programs={programs}
          onProduction={onProduction}
        />
      )}
      {machine && <SwitchSection onClick={onSwitch} />}
      {machine && (
        <SectionTwo>
          <SectionContainer>
            {section === 'defects' && <DefectsTable onNgs={onNgs} />}
            {section === 'downtime' && (
              <DowntimeTable onDowntime={onDowntime} />
            )}
            {section === 'purge' && <PurgeTable onResine={onResine} />}
          </SectionContainer>
          <div>
            <Comments onComments={onComments} />
            <Team onTeam={onTeam} onOper={onOper} onInsp={onInsp} />
          </div>
        </SectionTwo>
      )}
    </>
  )
}
