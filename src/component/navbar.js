import React from "react";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
    render() {
        return (
            <ul className="nav-bar">
                {this.props.children}
            </ul>
        )
    }
}
class NavBarGroup extends React.Component{
    render() {
        return (
            <li>
                <span className="title">{this.props.title} </span>
                <ul className="nav-group">
                    {this.props.children}
                </ul>
            </li>
        )
    }
}
class NavBarItem extends React.Component {
    render() {
        return (
            <li>
                <Link to={this.props.path}>
                    {this.props.children}
                </Link>
            </li>
        )
    }
}

export {
    NavBar,
    NavBarGroup,
    NavBarItem
}