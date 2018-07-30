import React, { Component } from 'react'
import Top from './../../../../components/IndexTop/Top';
import Header from './../components/Header';
import IndexContent from './../components/IndexContent'
import IndexFooter from './../../../../components/IndexFooter/IndexFooter'
import './index.less'
import Cookies from 'js-cookie'

import { Layout } from 'antd';
class Layouts extends Component {
    logout = () =>{
        Cookies.remove('JSESSIONID', { path: '/' })
        Cookies.remove('userName', { path: '/' })
        this.props.history.replace('/login')
    }
    render() {
        return (
            <Layout className='Layouts_wrap clear clearFix'>
                <Top />
                <Header />
                <IndexContent />
                <IndexFooter />
            </Layout>
        )
    }
}

export default Layouts