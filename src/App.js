import React, { Component } from 'react'
// 通用样式
import './index.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  // 初始化状态,状态在哪，操作状态的函数就在哪
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:false},
    {id:'003',name:'打豆豆',done:true},
    {id:'004',name:'逛街',done:false},
    {id:'005',name:'写代码',done:true},
  ]}
  // 添加新的todo
  addTodos = (todoObj) => {
    // 获取原来的状态
    const {todos} = this.state
    // 创建新的状态
    const newTodos = todoObj
    // 更新状态
    this.setState({todos:[newTodos,...todos]})
  }
  // 更新todo的状态
  updateTodos = (id,done) => {
    // 拿到当前的todos,遍历
    const {todos} = this.state
    const newTodos = todos.map((itemObj) => {
      // 遍历 itemObj，更新选中的item状态
      if(itemObj.id === id) {
        // ...itemObj == {id:'002',name:'睡觉',done:done}
        return {...itemObj,done}
      }
      else {
        return itemObj
      }
    })
    // 更新state状态
    this.setState({todos:newTodos})
    
  }
  //删除todo
  deleteTodos = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((itemObj) => {
      // 返回新的数组
      return itemObj.id !== id
    })
    this.setState({todos:newTodos})
  }
  // 选择与取消全选按钮
  checkAllTodo = (checked) => {
    // 获取状态
    const {todos} = this.state
    const newTodos = todos.map((itemObj) => {
      return {...itemObj,done:checked}
    })
    this.setState({todos:newTodos})
  }
  // 清除已完成的todo
  clearAllDoneTodo = () => {
    const {todos} = this.state
    const newTodos = todos.filter((itemObj) => {
      return !itemObj.done
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div>
        <div className="todo-container">
            <div className="todo-wrap">
              <Header addTodos={this.addTodos}/>
              {/* updateTodos 给item使用，List组件只传递 */}
              <List todos={todos} updateTodos={this.updateTodos} deleteTodos={this.deleteTodos}/>
              <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDoneTodo={this.clearAllDoneTodo}/>
            </div>
        </div>
      </div>
    )
  }
}
