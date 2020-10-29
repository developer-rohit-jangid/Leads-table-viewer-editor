import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/HelperComponents/PageNotFound';
import LeadListViewMain from './components/LeadComponents/LeadListViewMain'; 
import EditLead from './components/LeadComponents/EditLead'; 

import createBrowserHistory from 'history/createBrowserHistory';



const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <Switch>
                        <Route exact path="/" component={LeadListViewMain} />
                        <Route path="/lead/desboard" component={LeadListViewMain} />
                        <Route path="/lead/:id" component={EditLead} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;