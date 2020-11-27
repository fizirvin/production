import React from 'react'

export default function FormComponent({ title, children, controls, report }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>{title}</h2>
      <table>
        <tbody>{children}</tbody>
      </table>
      {report && report}
      {controls}
    </form>
  )
}
