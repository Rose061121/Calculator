import React, { Component } from 'react'
import StyleGuide from './StyleGuide'
import Calculator from './containers/Calculator'


export const containers = {
  
}
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentContainer: containers.HOME,
      width: window.innerWidth,
      height: window.innerHeight
    }

    
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  updateDimensions = (event) => {
    this.setState({
      width: event.target.innerWidth,
      height: event.target.innerHeight
    })
  }

  setContainer = (event) => {
    this.setState({
      currentContainer: event.target.id
    })
  }

  render() {

    const styles = {
      container: {
        height: this.state.height,
        width: this.state.width,
        fontFamily: StyleGuide.font.family,
        fontWeight: StyleGuide.font.weight.regular,
        backgroundColor: StyleGuide.pallette.background,
        position: 'fixed',
        top: 0,
        left: 0
      },
      content: {
        marginLeft: 20
      }
    }

  
    return (
      <div style={styles.container}>
        
        <div style={styles.content}>
          <Calculator />
        </div>
      </div>
    )
  }
}

export default App
