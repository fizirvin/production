import React from 'react'
import CheckInput from './checkInput'

export default function renderPrograms(programs = [], name) {
  return programs.map((program) => (
    <tr key={program._id}>
      <CheckInput
        program={program}
        reducer={'reportsForm'}
        input={'production'}
        type={name}
      />
    </tr>
  ))
}
