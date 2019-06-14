import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

class CarList extends Component {
    state = {
        cars: [
            { id: uuid(), name: 'Camaro' },
            { id: uuid(), name: 'Mustang' },
            { id: uuid(), name: 'Challenger' },
            { id: uuid(), name: 'GT' }
        ]
    }

    render() {
        const { cars } = this.state
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

export default CarList