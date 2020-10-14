import React from 'react'
export const HEADING_TYPE = {
  TAG_TWO: 'two',
  TAG_THREE: 'three'
}

export default function Htag({ text, type }) {
  const { TAG_TWO, TAG_THREE } = HEADING_TYPE
  switch (type) {
    case TAG_TWO:
      return <h2>{text}</h2>
    case TAG_THREE:
      return <h3>{text}</h3>
    default:
      return <h1>{text}</h1>
  }
}
