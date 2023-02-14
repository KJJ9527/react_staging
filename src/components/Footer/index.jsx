import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

  // 全选和取消全选
  checkedAll = (event) => {
    const {checked} = event.target
    this.props.checkAllTodo(checked)
  }
  // 清除已选中
  clearDone = () => {
    this.props.clearAllDoneTodo()
  }
  render() {
    const {todos} = this.props
    // 已完成和全部完成
    const countAllTodo = todos.length
    const countDoneTodo = todos.reduce((pre,itemObj) => {
        return pre + (itemObj.done ? + 1 : + 0)
    },0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.checkedAll} checked={countDoneTodo === countAllTodo && countAllTodo !== 0 ? true : false}/>
        </label>
        <span>
          <span>已完成{countDoneTodo}</span> / 全部{countAllTodo}
        </span>
        <button className="btn btn-danger" onClick={this.clearDone}>清除已完成任务</button>
      </div>
    )
  }
}
