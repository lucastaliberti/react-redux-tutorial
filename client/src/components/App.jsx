import React from 'react'
import {List,Map} from 'immutable'

const pair = List.of('Trainspotting','26 Days Later')
const tally = Map({'Trainspotting': 5,'26 Days Later': 4})

export default class App extends React.PureComponent
{
  render(){
    return React.cloneElement(this.props.children, {
       pair: pair
      ,tally: tally
      ,winner: 'Trainspotting'
    })
  }
}
