import { Component } from 'react'
import PubSub from 'pubsub-js'

export default class App extends Component {
  state = {
    msg: ''
  }

  componentDidMount () {
    this.token = PubSub.subscribe('szca', (name, data) => {
      this.setState({msg: data})
      console.log(name, data)
    })
  }

  render () {
    const { msg } = this.state
    return (
      <div>接收到的消息为:{msg}</div>
    )
  }
}
