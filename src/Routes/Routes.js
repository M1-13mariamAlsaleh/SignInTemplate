import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from '../Components/Pages/Home/Home'
import SignIn from '../Components/Pages/SignIn/SignIn'
import SignUp from '../Components/Pages/SignUp/SignUp'

function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signup" component={SignUp}/>
            </Switch>
        </React.Fragment>
    )
}

export default Routes
