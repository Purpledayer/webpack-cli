import React, { Component } from 'react'
import { Route, withRouter ,Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import * as ROOT_action from '@/store/ROOT/action'

import {Dropdown, Menu, Icon } from 'antd';
 
@withRouter
@connect(
    state => ({ ...state.ROOT }),
    dispatch => bindActionCreators({ ...ROOT_action }, dispatch)
)
export default class Top extends Component {
    componentWillMount(){
        let { ROOT_userInfo, ROOT_ChangeUser } = this.props
        if (ROOT_userInfo.name == '') {
            ROOT_ChangeUser({name: Cookies.get('userName')})
        }
    }
    render() {
        const { name } = this.props.ROOT_userInfo;
        const menu = (
            <Menu>
                <Menu.Item> <Link to="/OrderList">我的订单</Link> </Menu.Item>
                <Menu.Item> <Link to="/user" >账号资料</Link> </Menu.Item>
                <Menu.Item> <Link to="/admin" >卖家中心</Link> </Menu.Item>
                <Menu.Item> <a target="_blank" rel="noopener noreferrer" onClick={this.logout}>退出</a> </Menu.Item>
            </Menu>
          );
        return (
            <div className='top'>
                <div className="logo" />
                <div className='header clear clearFix'>
                    <Dropdown overlay={menu}  className='user'>
                        <div className="ant-dropdown-link name" href="#"><Icon className='font icon-touxiang' /> {name} </div>
                    </Dropdown>
                </div>
            </div>
        )
    }
}
