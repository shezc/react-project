import React, { Component } from 'react'
import { NavLink,Route,BrowserRouter } from 'react-router-dom'
import A from './a'
import B from './b'

export default class test extends Component {
  render() {
    return (
      <div>
        {/* 路由类的必须放到同一个BrowserRouter中才能生效*/}
        <BrowserRouter>
          {/* 控制路由变化 */}
          <NavLink activeClassName="demo" to="/a">toA</NavLink>
          <NavLink activeClassName="demo" to="/b">toB</NavLink>

          {/* 注册组件，监测路由变化显示不同的组件 */}
          <Route path="/a" component={A} />
          <Route path="/b" component={B} />
        </BrowserRouter>
      </div>
    )
  }
}
