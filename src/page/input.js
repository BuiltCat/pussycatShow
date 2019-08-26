import React from  "react"
import {Panel, PanelItem, PanelCode} from "../component/panel"
import { Input } from "pussycat"

class InputPage extends React.Component{
    render(){
        console.log(Input)
        return(
            <main className="main">
            <h2>Input 输入框</h2>
            <h3>默认输入框</h3>
                <Panel>
                    <PanelItem>
                        <Input placeholder="请输入内容"></Input>
                    </PanelItem>
                    <PanelCode>
                       {``} 
                    </PanelCode>
                </Panel>
                <h3>禁用输入框</h3>
                <Panel>
                    <PanelItem>
                        <Input disabled placeholder="请输入内容"></Input>
                    </PanelItem>
                    <PanelCode>
                       {``} 
                    </PanelCode>
                </Panel>
                <h3>带图标的输入框</h3>
                <Panel>
                    <PanelItem>
                    <Input icon="cat-fire" placeholder="请输入内容"></Input>
                    </PanelItem>
                    <PanelCode>
                       {``} 
                    </PanelCode>
                </Panel>
                <h3>不同大小的输入框</h3>
                <Panel>
                    <PanelItem>
                        <Input placeholder="请输入内容" size="large" />
                        <Input placeholder="请输入内容" />
                        <Input placeholder="请输入内容" size="small" />
                        <Input placeholder="请输入内容" size="mini" />
                    </PanelItem>
                    <PanelCode>
                       {``} 
                    </PanelCode>
                </Panel>
            </main>
        )
    }
}

export default InputPage