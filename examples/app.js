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
        <NewFeatures notes={notes} storageKey={STORAGE_KEY} limit="1" />
        <button onClick={this.resetState(0)}>Reset to version 0</button>
        <button onClick={this.resetState(1)}>Reset to version 1</button>
        <h2>Releases object:</h2>
        <pre>{JSON.stringify(notes, null, 2)}</pre>
      </div>
    )
  }

  resetState(version) {
    return () => {
      localStorage.setItem(STORAGE_KEY, version)
      location.reload()
    }
  }
}

ReactDOM.render(<App/>, appElement)
