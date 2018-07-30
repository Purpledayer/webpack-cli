import React, { Component } from 'react';
import { Route, Switch, withRouter ,IndexRoute } from 'react-router-dom';
import Layouts from './../pages/portal/Layouts/index';
import UserLayouts from '../pages/User/UserLayouts';
import AdminLayouts from '../pages/Admin/AdminLayouts';
import Login from '../pages/Login';
import Cookies from 'js-cookie';

@withRouter
export default class Routers extends Component {
    constructor(props) {
        super(props)
        this.pathname = this.props.location.pathname
    }
    checkJsessionID = () =>{
        if (this.props.location.pathname != '/login') {
            if (!Cookies.get('JSESSIONID')) {
                this.props.history.replace('/login')
            }
        } else {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/index')
            }
        }
    }
    componentWillMount() {
        if (this.pathname == '/') {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/index')
            } else {
                this.props.history.replace('/login')
            }
        } else {
            this.checkJsessionID()
        }
    }
    componentWillReceiveProps() {
      this.checkJsessionID()
    }
    isLogin(nextState, replaceState) {
      if (!Cookies.get('JSESSIONID')) {
          replaceState('/login')
      }
  }
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login}/>
                {/* <Route path='/user' component={UserLayouts}/> */}
                <Route path='/' component={Layouts}/>
                {/* <Route path='/admin' component={AdminLayouts}/> */}
            </Switch>
        )
    }
}


