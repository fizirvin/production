import React from 'react'
import Input from './input'

export default function renderInputs(items = []) {
  return items.map((item) => <Input {...item} />)
}
