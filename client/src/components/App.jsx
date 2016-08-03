import React from 'react'
import {List} from 'immutable'

const pair = List.of('Trainspotting','26 Days Later')

export default class App extends React.PureComponent
{
  render(){
    return React.cloneElement(this.props.children, {pair:pair})
  }
}
