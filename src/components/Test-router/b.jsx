import React, { Component } from 'react'
import qs from 'querystring' //作用是解析传递过来的字符串为对象

export default class b extends Component {
  render() {
    const { id,name,age } = qs.parse(this.props.location.search.slice(1))
    return (
      <div>
        我是B组件
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>age: {age}</p>
      </div>
    )
  }
}
