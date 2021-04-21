import { Component } from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

export default class Demo extends Component {
  render () {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    )
  }
}
