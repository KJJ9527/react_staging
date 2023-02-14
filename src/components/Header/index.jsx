import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  // 对接收的props进行类型以及必要性的限制
  static propTypes = {
    addTodos: PropTypes.func.isRequired
  }
  // 键盘事件的回调
  handleKeyUp = (e) => {
    const {target,keyCode} = e
    // 是否提交
    if(keyCode !== 13) return
    // 是否为空
    if(target.value.trim() == '') {
      return alert('不能为空！请输入数据')
    }
    const todoObj = {id:nanoid(),name:target.value,done:false}
    // todoObj子传父，调用父组件addTodos()函数
    this.props.addTodos(todoObj)
    // 提交后清空输入框
    target.value = ''

  }
  render() {
    return (
      <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
