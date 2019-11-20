import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className="header clearfix">
                <div className="layout">
                    <h1>
                        <img className="logo" src="./logo.png" alt="logo"></img>Pussycat</h1>
                    <ul>
                                <li>
                                    <Link to='/'>
                                        主页
                                    </Link >
                                </li>
                                <li>
                                    <Link   to='/component/start'>
                                    组件
                                    </Link >
                                </li>
                    </ul>
                </div>
                <div className="line"></div>
            </header>
        )
    }
}

export default Header;