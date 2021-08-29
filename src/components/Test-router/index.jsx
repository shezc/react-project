import React, { Component } from 'react'
import { NavLink,Route,BrowserRouter } from 'react-router-dom'
import A from './a'
import B from './b'
import C from './c'


const toAData = {
  id: 1,
  age: 34,
  name: '啊啊啊啊啊啊啊啊'
}

const toBData = {
  id: 2,
  age: 23,
  name: '不啵啵啵啵啵啵啵啵啵啵啵啵'
}

const toCData = {
  id: 3,
  age: 98,
  name: '踩踩踩踩踩踩踩踩踩踩踩'
}
export default class test extends Component {
  render() {
    return (
      <div>
        {/* 路由类的必须放到同一个BrowserRouter中才能生效*/}
        <BrowserRouter>
          {/* 控制路由变化 */}

          {/* 路由传参-params */}
          <NavLink activeClassName="demo" to={`/a/${toAData.id}/${toAData.name}/${toAData.age}`}>toA</NavLink>

          {/* 路由传参-search */}
          <NavLink activeClassName="demo" to={`/b?id=${toBData.id}&name=${toBData.name}&age=${toBData.age}`}>toB</NavLink>

          {/* 路由传参-state */}
          <NavLink activeClassName="demo" to={{pathname:'/c',state:{id:toCData.id, name: toCData.name, age:toCData.age}}}>toC</NavLink>
          
          {/* 注册组件，监测路由变化显示不同的组件 */}
          <Route path="/a/:id/:name/:age" component={A} />
          <Route path="/b" component={B} />
          <Route path="/c" component={C} />
        </BrowserRouter>
      </div>
    )
  }
}
