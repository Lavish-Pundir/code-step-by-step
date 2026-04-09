import React, { PureComponent} from 'react'
import './App.css'
import User from './User'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  render() {
    // console.log("check-rerendring")
    return (
      <div className='App'>
        <User count={this.state.count} />
        <button
          onClick={() => this.setState({ count: 1 })}>    {/*this.state.count + */}
          Update Count
        </button>
      </div>
    )
  }

}

export default App
