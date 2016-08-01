import {List,Map,fromJS} from 'immutable'
import {expect} from 'chai'

import {setEntries,next,vote} from '../src/core'

describe('application logic',()=>{

  describe('setEntries',()=>{

    it('add entries to the state', () => {

      const state = Map()
      const entries = List.of('Trainspotting','28 Days Later')
      const nextState = setEntries(state,entries)

      expect(nextState).to.equal(Map({
        entries:List.of('Trainspotting','28 Days Later')
      }))

    })

    it('converts to immutable',() => {

      const state = Map()
      const entries = ['Trainspotting','28 Days Later']
      const nextState = setEntries(state,entries)

      expect(nextState).to.equal(Map({
        entries:List.of('Trainspotting','28 Days Later')
      }))

    })

  })

  describe('next',() => {

    it('takes the next two entries under vote',() => {
      const state = Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      });

      const nextState = next(state)

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        })
        ,entries: List.of('Sunshine')
      }))
    })

    it('puts the winner of the current vote back to entries',()=>{

      const state = fromJS({
        vote:{
          pair:['Trainspotting', '28 Days Later']
          ,tally:{
             'Trainspotting': 4
            ,'28 Days Later': 2
          }
        }
        ,entries:['Sunshine', 'Millions', '127 Hours']
      })

      const nextState = next(state)

      expect(nextState).to.equal(fromJS({
        vote:{
          pair:['Sunshine', 'Millions']
        }
        ,entries:['127 Hours','Trainspotting']
      }))

    })

    it('puts both tied vote back to entries',()=>{

      const state = fromJS({
        vote:{
          pair:['Trainspotting', '28 Days Later']
          ,tally:{
             'Trainspotting': 3
            ,'28 Days Later': 3
          }
        }
        ,entries:['Sunshine', 'Millions', '127 Hours']
      })

      const nextState = next(state)

      expect(nextState).to.equal(fromJS({
        vote:{
          pair:['Sunshine', 'Millions']
        }
        ,entries:['127 Hours','Trainspotting','28 Days Later']
      }))
    })
  })

  describe('vote',() => {
    it('create a tally for the voted entry',() => {

        const state = Map({
          vote: Map({
            pair: List.of('Trainspotting','26 Days Later')
          })
          ,entries: List()
        })
        const nextState = vote(state,'Trainspotting')

        expect(nextState).to.equal(Map({
          vote: Map({
            pair: List.of('Trainspotting','26 Days Later')
            ,tally: Map({
              'Trainspotting':1
            })
          })
          ,entries: List()
        }))

    })

    it('add the existing tally for the voted entry',() => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting','26 Days Later')
          ,tally: Map({
            'Trainspotting':3
            ,'26 Days Later':2
          })
        })
        ,entries: List()
      })
      const nextState = vote(state,'Trainspotting')
      expect(nextState).to.equal(fromJS({
        vote: {
           pair: ['Trainspotting','26 Days Later']
          ,tally: {
            'Trainspotting':4
            ,'26 Days Later':2
          }
        }
        ,entries: []
      }))

    })
  })
})
