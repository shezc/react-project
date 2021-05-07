import { Component } from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import AxiosComponent from './components/Axios-component'

export default class Demo extends Component {
  render () {
    return (
      <div>
        <Hello />
        <Welcome />
        <AxiosComponent />
      </div>
    )
  }
}
