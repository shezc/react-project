import { Component } from 'react'
import axios from 'axios'

export default class Axios extends Component {
  getCars = () => {
    axios.get('api/students').then(({data}) => {
      console.log(data)
    })
  }
  getBool = () => {
    axios.get('service/cars').then(({data}) => {
      console.log(data)
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.getCars}>获取汽车数据</button>
        <button onClick={this.getBool}>获取布尔值</button>
      </div>
    )
  }
}
