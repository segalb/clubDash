import React from 'react'
import PropTypes from 'prop-types'
import {AVAILABLE_NUMBERS} from '../../Library/const'

import {
  Modal,
  Button,
  HelpBlock,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

class RiderModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currEvent: props.currEvent,
      numSeats: String(props.currEvent.freeSeats),
      availableNumbers: AVAILABLE_NUMBERS
    }
  }

  leaveTrip () {
    this.props.leaveTrip()
  }

  closeRiderModal () {
    this.props.closeRiderModal()
  }

  render () {
    return (
      <div className='join-modal'>
        <Modal.Header>
          <Modal.Title>{this.state.currEvent.organizer}'s Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Organizer: {this.state.currEvent.organizer}</Modal.Title>
          <Modal.Title>Description: {this.state.currEvent.desc}</Modal.Title>
          <Modal.Title>Leaving from: {this.state.currEvent.origin}</Modal.Title>
          <Modal.Title>Destination: {this.state.currEvent.destination}</Modal.Title>
          <Modal.Title>Free Seats: {this.state.currEvent.freeSeats}</Modal.Title>
          <Modal.Title>Start Time: {this.state.currEvent.start.toLocaleString()}</Modal.Title>
          <Modal.Title>End Time: {this.state.currEvent.end.toLocaleString()}</Modal.Title>
          <Modal.Title>Other Riders:</Modal.Title>
          <ListGroup>
            {this.state.currEvent.riders.map((rider, index) => {
              if (rider === this.props.profile.name) {
                return <ListGroupItem key={index}>{rider}<Button onClick={this.leaveTrip.bind(this)}>Click to Leave Trip</Button></ListGroupItem>
              } else {
                return <ListGroupItem key={index}>{rider}</ListGroupItem>
              }
            })}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeRiderModal.bind(this)}>Done</Button>
          <HelpBlock />
        </Modal.Footer>
      </div>
    )
  }
}

RiderModal.propTypes = {
  leaveTrip: PropTypes.func.isRequired,
  closeRiderModal: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  })
}

export default RiderModal