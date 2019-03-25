import React from "react";
import { Panel,PanelItem,PanelCode } from "../component/panel"
import { Menu, MenuItem, SubMenu } from "pussycat";

class HorMenu extends React.Component {
    render() {
        return (
            <Menu defaultActive="1" mode="horizontal" onSelect={this.onSelect}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu>
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(){
        
    }
}

class HorMenuDark extends React.Component {
    render() {
        return (
            <Menu theme="dark" defaultActive="1" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu> 
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(){
        
    }
}

class MenuPage extends React.Component {
    render() {
        return (
            <main className="main">
                <h2>Menu 菜单栏</h2>
                <h3>默认菜单栏</h3>
                <Panel>
                    <PanelItem>
                       <HorMenu></HorMenu>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Menu defaultActive="1" mode="horizontal" onSelect={this.onSelect}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu>
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(){
        
    }
`}
                    </PanelCode>
                </Panel>
                <h3>单选框组</h3>
                <Panel>
                    <PanelItem>
                        <HorMenuDark></HorMenuDark>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Menu theme="dark" defaultActive="1" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu> 
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(){
        
    }
`}
                    </PanelCode>
                </Panel>
            </main>
        )
    }
}

export default MenuPage;