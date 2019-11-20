import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';
// 组件
import Headr from "./component/header"
import Main from "./component/main"
import Footer from "./component/footer"
import Nav from "./component/nav"
// 页面
import ButtonPage from "./page/button"
import StartPage from "./page/start"
import RadioPage from "./page/radio"
import MenuPage from "./page/menu"
import TablePage from "./page/table"
import IconPage from "./page/icon"
import InputPage from "./page/input"
import CheckBoxPage from './page/checkbox'
import LayoutPage from './page/layout'
import SelectPage from './page/select'
import TagPage from './page/tag'
import ProgressPage from './page/progress'
import LoadingPage from './page/Loading'
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Headr></Headr>
                    <div className="app layout clearfix">
                        <Route path="/" exact component={Main} />
                        <Route path="/component"  component={Nav} />
                        <Route path="/component/layout"  component={LayoutPage} />
                        <Route path="/component/icon"  component={IconPage} />
                        <Route path="/component/button"  component={ButtonPage} />
                        <Route path="/component/start"  component={StartPage} />
                        <Route path="/component/radio"  component={RadioPage} />
                        <Route path="/component/checkbox"  component={CheckBoxPage} />
                        <Route path="/component/input"  component={InputPage} />
                        <Route path="/component/select"  component={SelectPage} />
                        <Route path="/component/table"  component={TablePage} />
                        <Route path="/component/tag"  component={TagPage} />
                        <Route path="/component/progress"  component={ProgressPage} />
                        <Route path="/component/loading" component={LoadingPage} />
                        <Route path="/component/menu"  component={MenuPage} />
                    </div>
                    <Footer></Footer>
                </div>
            </Router>
        )
    }
}

export default App;