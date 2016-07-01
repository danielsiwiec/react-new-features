import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import NewFeatures from '../../lib/components/NewFeatures'
import notes from './Notes.json'

const APP_NAME = 'newFeaturesExample'
let appElement = document.getElementById('example')

class App extends Component {

  render() {
    return (
      <div>
        <NewFeatures notes={notes} appName={APP_NAME}>
        </NewFeatures>
        <button onClick={this.resetState}>Reset state</button>
      </div>
    )
  }

  resetState() {
    localStorage.removeItem(APP_NAME)
  }
}

ReactDOM.render(<App/>, appElement)
