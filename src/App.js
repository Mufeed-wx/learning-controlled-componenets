import React, { Component } from 'react'
import DemmiData from './componenets/Sample';
import Header from './componenets/Header';
import Usage from './componenets/Usage';
import HomePage from './pages/HomePageClass';
import HomePageFun from './pages/HomePageFun';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "home"
    }
  }

  handleSelect = (value) => {
    this.setState({
      currentPage: value
    })
  }
  getPage() {
    const { currentPage } = this.state;
    switch (currentPage) {
      case 'home':
        return <HomePageFun name='home'  />
      case 'settings':
        return <DemmiData name='Settings' />
        case 'usage':
          return <Usage/>
      case 'Logout':
        return <DemmiData name='logout' />
      default:
        break;
    }
  }
  render() {
    return (
      <>
        <Header onMenuSelect={this.handleSelect} />
        {this.getPage()}
      </>
    )
  }
}
