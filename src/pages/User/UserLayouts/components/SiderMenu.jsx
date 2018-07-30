import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import menuConfig from '@/config/Usercofig/menu'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@withRouter
export default class Sider extends React.Component {
	state = {
        keys: []
	}
	selectKey = () =>{
        let keys = []
        keys.push(this.props.history.location.pathname)
        this.setState({keys:keys})
    }
    componentWillMount() {
        this.selectKey()
    }
    onSelect = ({ key }) =>{
        this.props.history.push(key)
    }
    componentWillReceiveProps (nextProps){
        if (this.props.location.pathname != nextProps.location.pathname) {
            this.selectKey()
        }
    }
	render() {
		console.log(this.state);
		return (
			<div  className="left">
			<Menu mode="inline"  onSelect={this.onSelect} selectedKeys={this.state.keys}>
                    {menuConfig.map((item,i)=>
                        item.list && item.list.length > 0 ?
                            <SubMenu key={item.key} title={<span><span className={'font icon-' +item.icon}></span><span>{item.title}</span></span>}>
                                {item.list.map((listItem,ii)=>
                                    <Menu.Item key={item.key+listItem.key}>
                                        <span>{listItem.title}</span>
                                    </Menu.Item>
                                )}
                            </SubMenu>
                            :
                            <Menu.Item key={item.key}>
                                <span className={'font icon-' +item.icon}></span>
                                <span>{item.title}</span>
                            </Menu.Item>
                    )}
                </Menu>
			</div>
		);
	}
}

