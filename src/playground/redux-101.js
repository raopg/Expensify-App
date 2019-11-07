import { createStore } from 'redux'

// Action generator

const incrementCount = ({incrementBy = 1} = {}) =>({
    incrementBy,
    type: 'INCREMENT'
})

const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count = 0} = {}) =>({
    type: 'SET',
    count
})

const resetCount = () =>({
    type: 'RESET'
})

// Reducer
// 1. Reducers are pure functions =  NO GLOBALS. State, action are passed in.
// 2. Never change the state or action objects. Return a NEW state

const countReducer = (state = {count: 0}, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}
const store = createStore()
// You can unsubscribe using the function that subscribe returns.

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(decrementCount())

store.dispatch(setCount({count: 15}))

store.dispatch(resetCount())
console.log(store.getState())

