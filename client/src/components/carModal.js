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
import PropTypes from 'prop-types'

class CarModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newCar = {
            name: this.state.name
        }

        // Add car via addCar action
        this.props.addCar(newCar)

        // close modal
        this.toggle()
    }

    render() {
        return (
            <div>
                { this.props.isAuthenticated ? <Button color="dark" style={{ marginBottom: '2rem' }}
                onClick={this.toggle}>Add Car</Button> : <h4 className="mb-3 ml-4">Please Log In to Manage Cars</h4> }

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
                                    <Button color="secondary" style={{ marginTop: '2rem' }} block>Add Car</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    car: state.car,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addCar })(CarModal)