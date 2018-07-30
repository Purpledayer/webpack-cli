import React, { Component } from 'react'
// import { Route, withRouter } from 'react-router-dom'
// import Loading from '@/components/Loading';
// import routes from '@/config/routes';
import { Layout } from 'antd';
const { Content } = Layout;
export default class IndexContent extends Component {
    render() {
        return (
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
        )
    }
}

