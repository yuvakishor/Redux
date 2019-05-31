import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Get from '../components/Get'
import connectGet from '../components/connectGet'
import Post from '../components/Post'
import postGet from '../components/postGet'

class Routing extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact={true} path="/" component={Get} />
                        <Route path="/connectGet" component={connectGet} />
                        <Route path="/Post" component={Post} />
                        <Route path="/postGet" component={postGet} />
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}
export default Routing;
