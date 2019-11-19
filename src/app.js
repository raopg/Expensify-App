import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const store = configureStore()
store.dispatch(addExpense({description: 'Water bill', amount: 500, createdAt: 2}))
console.log(store.getState())

store.dispatch(addExpense({description: 'Gas bill', amount: 700, createdAt: 1}))
console.log(store.getState())

store.dispatch(setTextFilter('bill'))
const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
