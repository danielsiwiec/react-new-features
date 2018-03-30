import React, {Component} from 'react'
import ReactModal from 'react-modal'

const styles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

export default class TourModal extends Component {

  constructor(props) {
    super(props)
    this.state = {transform: false}
  }

  render() {
    return (
      <ReactModal isOpen={this.props.show}
                  style={styles}
                  onAfterOpen={this.transform.bind(this)}>
        {this.props.children}
      </ReactModal>
    )
  }

  transform() {
    this.setState({transform: true})
  }
}
