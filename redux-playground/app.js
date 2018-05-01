const { createStore } = require('redux')
const counter = require('./reducers/counter')

// The store holds the current state of the application which exists in the form of an object.

// When we dispatch actions, the store (an object) is transitioned to the next state.

// The createStore function will specify that the counter reducer will be in charge of managing updates to the state.

const store = createStore(counter)

// Redux has three main methods:

// store.getState() will return the current state of the Redux store.

// store.dispatch({ type: 'ACTION'}) is used to dispatch an action, used to update the state of our application.

// store.subscribe() will register a callback that will be called anytime the state of the application is updated. In the case below, anytime the store is updated, document.body.innerText is set to equal whatever the current (freshly updated) state is

/*

store.subscribe(() => {
  document.body.innerText = store.getState()
})

*/

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

// The issue with the above example is that the state is only rendered upon the first click. That click dispatches an action, store.subscribe takes note of it and only then does it set the document.body to equal the current state.

// Here, we can call a render function to output the current state to the body

const render = () => {
  document.body.innerText = store.getState()
}

// Since the store is now subscribed to the render function, it will be called everytime the state is updated (by clicking on the document body)

store.subscribe(render)

// By calling it once manually, we can ensure the intial state is displayed

render()
