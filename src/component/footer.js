import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="line"></div>
                <div className="layout" > 
                    <p>
                        <span><img className="logo" src="./logo.png" alt="logo"></img>Pussycat</span>
                        <span><a href="https://github.com/BuiltCat" target="_blank">项目源码</a></span>
                        <span><a href="https://github.com/BuiltCat" target="_blank">与我联系</a></span> 
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer;