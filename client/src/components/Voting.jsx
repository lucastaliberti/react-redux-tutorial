import React from 'react'
import Vote from './Vote.jsx'
import Winner from './Winner.jsx'

export default class Voting extends React.PureComponent
{
  getPair() {
      return this.props.pair || []
  }
  render() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>
  }
}
