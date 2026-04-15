import React from 'react'
import { CommonContext } from './components/CommonContext'
import './App.css'
import UsrMain from './components/UsrMain'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {

  constructor() {
    super()

    // function pehle define karo
    this.updateColor = () => {
      this.setState({
        color: "red"
      })
    }

    this.state = {
      color: "green",
      updateColor: this.updateColor
    }

  }

  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <h1>Complete and easy explane for Context API</h1>
        <UsrMain />
        <Footer />
      </CommonContext.Provider>
    );
  }
}

export default App
