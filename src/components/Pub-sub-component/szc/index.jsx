import { Component } from 'react'
import PubSub from 'pubsub-js'

export default class App extends Component {
  publishData = () => {
    console.log(1111)
    PubSub.publish('szca', '啦啦啦')
    console.log(PubSub, 89899)
  }
  render () {
    return (
      <div>
        <button onClick={this.publishData}>发布消息</button>
      </div>
    )
  }
}
