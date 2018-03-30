import React, {Component} from 'react'
import ReactModal from 'react-modal'

const styles = {
  title: {
    margin: 0,
    textAlign: 'center'
  },
  button: {
    display: 'block',
    margin: '0 auto',
    background: 'blue',
    border: 'none',
    padding: '0.6rem 1.2rem',
    color: '#fff',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    borderRadius: '2px'
  },
  modal: {
    content : {
      position: 'absolute',
      top: '30%',
      left: '20%',
      right: '20%',
      bottom: 'auto'
    }
  }
}

const storageKey = 'react-new-features-modal'

export default class NewFeatures extends Component {

  constructor(props) {
    super(props)
    this.state = {showModal: false, features: []}
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
    updateUserVersion(this.props.notes)
    this.setState({showModal: false})
  }

  componentDidMount() {
    let features = getNewFeatures(this.props.notes.releases, this.props.limit)
    let showModal = areThereUpdates(this.props.notes)
    this.setState({showModal, features})
  }
}

const areThereUpdates = notes => userVersion() < notesVersion(notes)

const getNewFeatures = (releases, limit) => {
  const isNewer = release => release.version > userVersion()
  const byVersion = (one, two) => one.version - two.version
  return releases
    .filter(isNewer)
    .sort(byVersion)
    .slice(-1*limit)
    .reduce((acc, release) => acc.concat(release.features), [])
}

const updateUserVersion = notes => {
  let version = notesVersion(notes)
  localStorage.setItem(storageKey, version)
}

const notesVersion = notes => Math.max(...notes.releases.map(release => release.version))

const userVersion = () => localStorage.getItem(storageKey) || 0