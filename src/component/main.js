import React from "react";
import { Button, Menu, MenuItem, SubMenu, Select} from "pussycat"
import { Link } from "react-router-dom"

function StartA(){
    return (
    <div className="start">
        <h2>Pussycat</h2>
        <p>优雅 简单的React UI组件库</p>
        <Link to='/component/start'><Button fill size={'mini'}>开始使用</Button></Link>
        <a href="https://github.com/BuiltCat/Pussycat"><Button fill size={'mini'}>GitHub</Button></a>
    </div>)
}

function StartB(){
    return (<div className="start">
        <h2>菜单栏组件</h2>
        <p>优雅 简单的React UI组件库</p>
            <Menu defaultActive="1" mode="horizontal">
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu>
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        </div>)
}

function StartC(){
    const  options = [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
        disabled: true
      }]
    return (<div className="start">
    <h2>选择器组件</h2>
    <p>优雅 简单的React UI组件库</p>
    <Select options={options} placeholder="请选择"></Select>
    </div>)
}

function Progress(){
    return(<div className="progress">
            <div className="inline"></div>
        </div>)
}
class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            start: [
                <StartA></StartA>,
                <StartB></StartB>,
                <StartC></StartC>
            ],
            index: 0,
            time: 0
        }
    }
    componentDidMount(){
        setInterval(()=>{
            if(this.state.index === this.state.start.length-1){
                this.setState({
                    index: 0
                })
            }else{
                this.setState({
                    index: this.state.index + 1
                })
            }
        }, 5000)
    }
    debounce(e){
        let timeout = null
        return function(e){
            clearTimeout(timeout)
            let deltaY = e.deltaY
            timeout = setTimeout(() => {
                this.wheelHandler(deltaY)
            }, 100)
        }
    }
    wheelHandler(e){
        if(e > 0){
            if(this.state.index === this.state.start.length - 1){
                this.setState({
                    index: 0
                })
            }else {
                this.setState({
                    index: this.state.index+1
                })
            }   
        }else{
            if(this.state.index === 0){
                this.setState({
                    index: this.state.start.length - 1
                })
            }else{
                this.setState({
                    index: this.state.index-1
                })
            }
        }
    }
    render() {
        return (
            <main onWheel = {this.debounce().bind(this)}>
               <div id="start">
                    {this.state.start[this.state.index]}
                <div className="spot">
                    {this.state.start.map((e, i)=>{
                        return <span key={i} className={this.state.index === i?'active':''}></span>
                    })}
                </div>
                <Progress></Progress>
            </div>
            </main>
        )
    }
}

export default Main;