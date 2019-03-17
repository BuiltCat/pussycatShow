import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';
import Headr from "./component/header";
import { NavBar,NavBarItem,NavBarGroup } from "./component/navbar";
import Main from "./component/main";
import About from './about';
import Inbox from './inbox';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logo: {
                name: 'Cat-Component',
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
                            <NavBarItem path="/">快速开始</NavBarItem>
                        </NavBarGroup>
                        <NavBarGroup title="基础组件">
                            <NavBarItem path="/inbox">快速开始</NavBarItem>
                            <NavBarItem path="/about">快速开始</NavBarItem>
                            <NavBarItem path="/about">快速开始</NavBarItem>
                        </NavBarGroup>
                    </NavBar>
                    <Route path="/" exact component={Main} />
                    <Route path="/inbox/" component={Inbox} />
                    <Route path="/about/" component={About} /> 
                </div>
                </div>
            </Router>
        )
    }
}

export default App;