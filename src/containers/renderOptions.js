import React from 'react'

export default function renderOptions(items, k) {
  return items.map((item) => (
    <option key={item._id} value={item._id}>
      {item[k]}
    </option>
  ))
}
