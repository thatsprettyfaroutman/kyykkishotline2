import './KyykkisHeader.css'

import React from 'react'
import chromatism from 'chromatism'

export default () => (
  <header className="KyykkisHeader">
    <span>Kyykkis Hotline</span>
    <span style={{ color: chromatism.brightness(-25, '#ff0044').hex }}>Kyykkis Hotline</span>
    <span style={{ color: chromatism.brightness(-35, '#ff0044').hex }}>Kyykkis Hotline</span>
    <span style={{ color: chromatism.brightness(-40, '#ff0044').hex }}>Kyykkis Hotline</span>
  </header>
)
