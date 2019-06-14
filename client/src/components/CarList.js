import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { getCars } from '../actions/carActions'
import PropTypes from 'prop-types'

class CarList extends Component {

    componentDidMount() {
        this.props.getCars()
    }

    render() {
        const { cars } = this.props.car
        return (
    <Container>
        <Button 
        color="dark"
        style={{ marginBottom: '2rem' }}
        onClick={() => {
            const name = prompt('Enter Car')
            if(name) {
                this.setState(state => ({
                    cars: [...state.cars, { id: uuid(), name}]
                }))
            }
        }}>Add Car
        </Button>

        <ListGroup>
            <TransitionGroup className="car-list">
                {cars.map(({ id, name }) => (
                    <CSSTransition key={id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={() => {
                                this.setState(state => ({
                                    cars: state.cars.filter(car => car.id !== id)
                                }))
                            }}
                            >&times;
                            </Button>
                            {name}</ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
    </Container>
        )
    }
}

CarList.propTypes = {
    getCars: PropTypes.func.isRequired,
    car: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    car: state.car
})

export default connect(mapStateToProps, { getCars })(CarList)