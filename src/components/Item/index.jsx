import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  // 初始化状态
  state = {
    mouse : false
  }
  
  // 鼠标移入移出的回调
  mouseState = (flag) => {
    return () => {
      // 更新状态
      this.setState({mouse:flag})
    }
  }
  // 鼠标选中的回调
  selectState = (id) => {
    const {updateTodos} = this.props
    return (event) => {
      updateTodos(id,event.target.checked)
    }
  }
  // 删除按钮的回调-柯里化函数
  // delTodos = (id) => {
  //   const {deleteTodos} = this.props
  //   return () => {
  //     return deleteTodos(id)
  //   }
  // }

  // 不使用柯里化函数
  delTodos = (id) => {
    if(window.confirm('确定删除吗？')) {
        const {deleteTodos} = this.props
        return deleteTodos(id)
    }
    
  }
  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.mouseState(true)} onMouseLeave={this.mouseState(false) }>
        <label>
          <input type="checkbox" checked={done} onChange={this.selectState(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={() => this.delTodos(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}