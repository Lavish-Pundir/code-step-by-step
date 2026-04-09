import React, { PureComponent} from 'react'
import './App.css'

class User extends PureComponent {
 
  render() {
    console.log("user component check-rerendring")
    return (
      <div className='App'>
        <h1>Pure component: {this.props.count}</h1>
      </div>
    )
  }

}

export default User
