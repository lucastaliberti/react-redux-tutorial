import React from 'react'
import Vote from './Vote.jsx'
import Winner from './Winner.jsx'

export default class Voting extends React.PureComponent
{
  render(){
    return <div>
      {this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <Vote {...this.props} />}
    </div>
  }
}
