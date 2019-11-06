import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is the dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>
        This is the add expense component
    </div>
)

const EditExpensePage = () => (
    <div>
        This is the edit expense component
    </div>
)

const HelpPage = () => (
    <div>
        This is the help page
    </div>
)

const NotFoundPage = () => (
    <div>
        The page you request does not exist. <Link to="/">Go Home</Link>
    </div>
)

const Header = () =>(
    <header>
        <h1> Expensify </h1>
        <Link to="/">Home</Link>
        <Link to="/create">Add Expense</Link>
        <Link to="/edit">Edit Expenses</Link>
        <Link to="/help">Help</Link>

    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact = {true} path="/" component={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
