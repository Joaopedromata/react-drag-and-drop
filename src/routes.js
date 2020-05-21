import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Main from './main'

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
            </Switch>
        </BrowserRouter>
        
    )


}

export default Router