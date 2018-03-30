import React, {Component} from 'react'
import Modal from './Modal'

const styles = {
  title: {
    margin: 0,
    textAlign: 'center',
    fontSize: '2.4em'
  },
  button: {
    display: 'block',
    margin: '0 auto',
    background: 'blue',
    border: 'none',
    padding: '0.6em 1.2em',
    color: '#fff',
    fontSize: '0.8em',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    borderRadius: '2px'
  }
}

export default class NewFeatures extends Component {

  constructor(props) {
    super(props)
    this.state = {showModal: false, features: []}
  }

  render() {
    return (
      <Modal show={this.state.showModal}>
        <h3 style={styles.title}>New features!</h3>
        <div>
          <p style={styles.subtitle}>We implemented some new features for you:</p>
          <ul>
            {this.state.features.map((feature, index) => {
              return <li key={index}><strong>{feature.title}</strong> {feature.description}</li>
            })}
          </ul>
          <button style={styles.button} onClick={this.closeModal.bind(this)}>Got it!</button>
        </div>
      </Modal>
    )
  }

  closeModal() {
    this.setState({showModal: false})
    this.updateUserVersion()
  }

  getUsersVersion(){
    return localStorage.getItem(this.props.storageKey) || 0
  }

  updateUserVersion(){
    localStorage.setItem(this.props.storageKey, this.currentVersion())
  }

  currentVersion() {
    return this.props.notes.releases
      .reduce((acc, release) => {return acc > release.version ? acc : release.version}, 0)
  }

  componentDidMount() {
    let features = this.getNewFeatures(this.getUsersVersion(), this.props.limit)
    this.setState({features})
    let show = this.getUsersVersion() < this.currentVersion()
    setTimeout(()=> {this.setState({showModal: show})}, 1000)
  }

  getNewFeatures(version, limit) {
    return this.props.notes.releases
      .filter((release) => {return release.version > version})
      .sort((one, two) => {return one.version - two.version})
      .slice(-1*limit)
      .reduce((acc, release) => {return acc.concat(release.features)}, [])
  }

}
