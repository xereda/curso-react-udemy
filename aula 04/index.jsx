import React from 'react'
import ReactDOM from 'react-dom'
import { Primeiro, Segundo } from './component'

ReactDOM.render(
  <div>
    <Primeiro value="primeiro teste"/>
    <Segundo value="segundo teste"/>
  </div>,
  document.getElementById('app')
)
