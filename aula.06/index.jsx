import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './Member'

ReactDOM.render(
  <div>
    <Family lastName="Schroeder">
      <Member name="Jackson" />
      <Member name="Clara" />
      <Member name="Gisela" />
    </Family>
  </div>,
  document.getElementById('app')
)
