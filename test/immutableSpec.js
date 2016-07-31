import {expect} from 'chai'

describe('immutability',()=>{
  describe('a number',()=>{

    function incrment(currentState){
      return currentState+1
    }

    it('is immutable',()=>{
      let state = 42
      let nextState = incrment(state)

      expect(nextState).to.equal(43)
      expect(state).to.equal(42)
    })

  })
})
