import React from 'react'
import ReactDom from 'react-dom'
import Voting from './components/Voting.jsx'

const pair = ['Trainspottin','26 Days Later']

ReactDom.render(
  <Voting pair={pair} />
  ,document.getElementById('app')
)
