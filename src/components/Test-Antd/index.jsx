import React, { Component } from "react";
import { Button } from 'antd'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">这是按钮的名称</Button>
        <Button type="link">这是按钮的名称</Button>
      </div>
    )
  }
}
