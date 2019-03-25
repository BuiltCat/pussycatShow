import React from "react";
import { Panel,PanelItem,PanelCode } from "../component/panel"
import { Radio, RadioGroup } from "pussycat";

class RadioGroupOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "a"
        }
    }
    onChange(value) {
        this.setState({ value });
    }
    render() {
        return (
            <div>
                <Radio value="a" checked={this.state.value === "a"} onChange={this.onChange.bind(this)}>备选项</Radio>
                <Radio value="b" checked={this.state.value === "b"} onChange={this.onChange.bind(this)}>备选项</Radio>
            </div>
        )
    }
}

class RadioGroupTwo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 3
        }
    }
    onChange(value) {
        this.setState({ value });
    }
    render() {
        return (
            <RadioGroup value={this.state.value} onChange={this.onChange.bind(this)}>
                <Radio value={3}>备选项</Radio>
                <Radio value={6}>备选项</Radio>
                <Radio value={9}>备选项</Radio>
            </RadioGroup>
        )
    }

}

class RadioPage extends React.Component {
    render() {
        return (
            <main className="main">
                <h2>Radio 单选框</h2>
                <h3>单选框</h3>
                <Panel>
                    <PanelItem>
                        <RadioGroupOne></RadioGroupOne>
                    </PanelItem>
                    <PanelCode>
                        {`
    constructor(props) {
            super(props);
            this.state = {
                value: "a"
            }
        }
        onChange(value) {
            this.setState({ value });
        }
        render() {
            return (
                <div>
                    <Radio value="a" checked={this.state.value === "a"} onChange={this.onChange.bind(this)}>备选项</Radio>
                    <Radio value="b" checked={this.state.value === "b"} onChange={this.onChange.bind(this)}>备选项</Radio>
                </div>
            )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>单选框组</h3>
                <Panel>
                    <PanelItem>
                        <Radio disabled value={1}>中国</Radio>
                        <Radio disabled value={2}>美国</Radio>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <div>
                <Radio disabled value={1}>中国</Radio>
                <Radio disabled value={2}>美国</Radio>
            </div>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>单选框组</h3>
                <Panel>
                    <PanelItem>
                        <RadioGroupTwo></RadioGroupTwo>
                    </PanelItem>
                    <PanelCode>
                        {`
    constructor(props) {
        super(props);

        this.state = {
            value: 3
        }
    }
    onChange(value) {
        this.setState({ value });
    }
    render() {
        return (
            <RadioGroup value={this.state.value} onChange={this.onChange.bind(this)}>
                <Radio value={3}>备选项</Radio>
                <Radio value={6}>备选项</Radio>
                <Radio value={9}>备选项</Radio>
            </RadioGroup>
        )
    }
`}
                    </PanelCode>
                </Panel>
            </main>
        )
    }
}

export default RadioPage;