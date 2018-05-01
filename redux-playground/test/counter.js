const expect = require('expect')
const counter = require('../reducers/counter')

// When the counter receives the current state of 0 with an INCREMENT action, we would expect the next state to be 1

expect(
  counter(0, { type: 'INCREMENT' })
).toEqual(1)

// The same is true if the current state is 1

expect(
  counter(1, { type: 'INCREMENT' })
).toEqual(2)

// We can also expect the opposite. Should the current state be 2 and we receive a DECREMENT action, the next state should be 1

expect(
  counter(2, { type: 'DECREMENT' })
).toEqual(1)

// More of the same here

expect(
  counter(1, { type: 'DECREMENT' })
).toEqual(0)

// What if we dispatch something totally unexpected?

expect(
  counter(0, { type: '🌭' })
).toEqual(0)


// What if we pass in no action at all?

expect(
  counter(undefined, {})
).toEqual(0)

console.log('Our tests passed!')
