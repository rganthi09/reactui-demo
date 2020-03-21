/*import React from 'react';
import './App.css';*/
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListScenarioComponent from "./component/user/ListScenarioComponent";
import AddScenarioComponent from "./component/user/AddScenarioComponent";
import EditScenarioComponent from "./component/user/EditScenarioComponent";
import React from "react";

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}>React User Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListScenarioComponent}/>
                        <Route path="/scenarios" component={ListScenarioComponent}/>
                        <Route path="/add-scenario" component={AddScenarioComponent}/>
                        <Route path="/edit-scenario" component={EditScenarioComponent}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color:'red',
    margin: '10px'
}

export default AppRouter;