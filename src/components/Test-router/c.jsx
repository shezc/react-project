import React, { Component } from 'react'

export default class c extends Component {
  render() {
    const {id,name,age} = this.props.location.state
    return (
      <div>
        <p>我是C组件</p>
        <p>id:{id}</p>
        <p>name:{name}</p>
        <p>age:{age}</p>
      </div>
    )
  }
}
