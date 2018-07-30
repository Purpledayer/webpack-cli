import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Loading from '@/components/Loading';
import routes from '@/config/indexconfig/routes';
import { Layout } from 'antd';
const { Content } = Layout;
export default class IndexContent extends Component {
    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
               <Loading>
                    {routes.map((item,i)=>
                        <Route key={i} path={item.path} component={item.component} exact/>
                    )}
                </Loading>
          </Content>
        )
    }
}

