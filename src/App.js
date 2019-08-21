import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';
// 组件
import Headr from "./component/header"
import { NavBar, NavBarItem, NavBarGroup } from "./component/navbar"
import Footer from "./component/footer"
// 页面
import Main from "./component/main"
import ButtonPage from "./page/button"
import StartPage from "./page/start"
import RadioPage from "./page/radio"
import MenuPage from "./page/menu"
import TablePage from "./page/table"
import IconPage from "./page/icon"
import InputPage from "./page/input"
import CheckBoxPage from './page/checkbox';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: {
                name: 'Pussycat',
                image: './logo.png',
            },
            list: [{
                name: '主页',
                url: ''
            }, {
                name: '组件',
                url: ''
            }]
        }

    }
    render() {
        return (
            <Router>
                <div>
                    <Headr logo={this.state.logo} list={this.state.list}></Headr>
                    <div className="app layout clearfix">
                        <NavBar>
                            <NavBarGroup title="开发指南">
                                <NavBarItem path="/start">快速开始</NavBarItem>
                            </NavBarGroup>
                            <NavBarGroup title="Basic">
                                <NavBarItem path="/icon">Icon 图标</NavBarItem>
                                <NavBarItem path="/button">Button 按钮</NavBarItem>
                            </NavBarGroup>
                            <NavBarGroup title="From">
                                <NavBarItem path="/radio">Radio 单选框</NavBarItem>
                                <NavBarItem path="/checkbox">Checkbox 多选框</NavBarItem>
                                <NavBarItem path="/input">Input 输入框</NavBarItem>
                            </NavBarGroup>
                            <NavBarGroup title="Data">
                                <NavBarItem path="/table">Table 表格</NavBarItem>
                            </NavBarGroup>
                            <NavBarGroup title="Nav">
                                <NavBarItem path="/menu">Menu 菜单栏</NavBarItem>
                            </NavBarGroup>
                        </NavBar>
                        <Route path="/" exact component={Main} />
                        <Route path="/icon" exact component={IconPage} />
                        <Route path="/button" exact component={ButtonPage} />
                        <Route path="/start" exact component={StartPage} />
                        <Route path="/radio" exact component={RadioPage} />
                        <Route path="/menu" exact component={MenuPage} />
                        <Route path="/table" exact component={TablePage} />
                        <Route path="/checkbox" exact component={CheckBoxPage} />
                        <Route path="/input" exact component={InputPage} />
                    </div>
                    <Footer></Footer>
                </div>
            </Router>
        )
    }
}

export default App;