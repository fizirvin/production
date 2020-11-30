import React from 'react'
import { useSelector } from 'react-redux'

export default function RenderTeam({ team }) {
  const profiles =
    useSelector((state) => state['profiles']['items'])
      .filter((profile) => profile.team === team)
      .sort((a, b) => {
        if (a.position > b.position) return -1
        return 0
        // if (a.firstname < b.firstname) return -1;
      }) || []

  return profiles.map((item) => (
    <option
      key={item._id}
      value={item._id}
    >{`${item.position} - ${item.firstname} ${item.lastname}`}</option>
  ))
}
