import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import NewFeatures from '../index'
import notes from './Notes.json'

const STORAGE_KEY = 'newFeaturesExampleVersion'
let appElement = document.getElementById('example')

class App extends Component {

  render() {
    return (
      <div>
        <NewFeatures notes={notes} storageKey={STORAGE_KEY} />
        <button onClick={this.resetState}>Reset state</button>
      </div>
    )
  }

  resetState() {
    localStorage.removeItem(STORAGE_KEY)
  }
}

ReactDOM.render(<App/>, appElement)
