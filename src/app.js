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

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact = {true} path="/" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
