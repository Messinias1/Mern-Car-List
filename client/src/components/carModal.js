import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addCar } from '../actions/carActions'

class CarModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <Button color="dark" style={{ marginBottom: '2rem' }}
                onClick={this.toggle}>Add Car</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add to Car List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="car">Car</Label>
                                <Input 
                                    type="text"
                                    name="name"
                                    id="car"
                                    placholder="Add Car Here"
                                    onChange={this.onChange}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect()(CarModal)