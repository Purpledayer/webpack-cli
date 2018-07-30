import React, { Component } from 'react'
import Top from '../../../../components/IndexTop/Top'
import UserContent from '../components/UserContent'
// import IndexFooter from '@/components/Indexfooter/IndexFooter'
import SiderMenu from './../components/SiderMenu'
import './index.less'
import Cookies from 'js-cookie'
import { Layout } from 'antd';
const {  Content } = Layout;
export default class UserLayouts extends Component {
    render() {
        return (
            <Layout className='Layouts_wrap clear clearFix'>
                <Top />
                <Content>
                    <SiderMenu />
                    <UserContent />
                </Content>
                {/* <IndexFooter /> */}
            </Layout>
        )
    }
}