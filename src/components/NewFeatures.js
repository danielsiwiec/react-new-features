import React, {Component} from 'react'
import ReactModal from 'react-modal'

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
  },
  modal: {
    content : {
      position: 'absolute',
      top: '30%',
      left: '30%',
      right: '30%',
      bottom: '30%'
    }
  }
}

export default class NewFeatures extends Component {

  constructor(props) {
    super(props)
    this.state = {showModal: false, features: [], transform: true}
    this.closeModal = this.closeModal.bind(this)
  }

  render() {
    return (
      <ReactModal isOpen={this.state.showModal} style={styles.modal} >
        <h3 style={styles.title}>New features!</h3>
        <div>
          <p style={styles.subtitle}>We implemented some new features for you:</p>
          <ul>
            {this.state.features.map((feature, index) => {
              return <li key={index}><strong>{feature.title}</strong> {feature.description}</li>
            })}
          </ul>
          <button style={styles.button} onClick={this.closeModal}>Got it!</button>
        </div>
      </ReactModal>
    )
  }

  closeModal() {
    this.setState({showModal: false})
    updateUserVersion(this.props.storageKey, currentVersion(this.props.notes))
  }

  componentDidMount() {
    let features = getNewFeatures(this.props.notes.releases, getUsersVersion(this.props.storageKey), this.props.limit)
    this.setState({features})
    let show = getUsersVersion(this.props.storageKey) < currentVersion(this.props.notes)
    this.setState({showModal: show})
  }
}

const getNewFeatures = (releases, version, limit) => {
  return releases
    .filter((release) => {return release.version > version})
    .sort((one, two) => {return one.version - two.version})
    .slice(-1*limit)
    .reduce((acc, release) => {return acc.concat(release.features)}, [])
}

const updateUserVersion = (storageKey, version) => {
  localStorage.setItem(storageKey, version)
}

const currentVersion = notes => {
  return notes.releases
    .reduce((acc, release) => {return acc > release.version ? acc : release.version}, 0)
}

const getUsersVersion = storageKey => {
  return localStorage.getItem(storageKey) || 0
}