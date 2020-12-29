import React, { useState, useEffect } from 'react'
import './style.css'

export default function Hamburguer({ isOpen }) {
  const [styling, setStyling] = useState('container')

  useEffect(() => {
    if (isOpen) {
      setStyling('change')
    }
    if (!isOpen) {
      setStyling('container')
    }
  }, [isOpen])

  return (
    <div className={`${styling}`}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  )
}
