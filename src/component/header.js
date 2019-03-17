import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="header clearfix">
                <div className="layout">
                    <h1>
                        <img className="logo" src={this.props.logo.image}></img>
                        {this.props.logo.name}</h1>
                    <ul>
                        {this.props.list.map((element,index) => {
                            return <li key={index}> {element.name} </li>
                        })}
                    </ul>
                </div>
                <div className="line"></div>
            </header>
        )
    }
}

export default Header