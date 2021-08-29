import React, { Component } from 'react'

export default class A extends Component {
  render() {
    const {id,name,age} = this.props.match.params
    return (
      <div>
        <p>我是A组件</p>
        <li>id: {id}</li>
        <li>name: {name}</li>
        <li>age: {age}</li>
      </div>
    )
  }
}
