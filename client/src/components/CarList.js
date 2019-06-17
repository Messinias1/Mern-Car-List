import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getCars, deleteCar } from '../actions/carActions'
import PropTypes from 'prop-types'

class CarList extends Component {

    static propTypes = {
        getCars: PropTypes.func.isRequired,
        car: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getCars()
    }

    onDeleteClick = (_id) => {
        this.props.deleteCar(_id)
    }

    render() {
        const { cars } = this.props.car
        return (
    <Container>
        <ListGroup>
            <TransitionGroup className="car-list">
                {cars.map(({ _id, name }) => (
                    <CSSTransition key={_id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            { this.props.isAuthenticated ? (                            <Button className="remove-btn" color="danger" size="sm"
                                onClick={this.onDeleteClick.bind(this, _id)}>&times;
                            </Button>) :  ''}
                            {name}
                        </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
    </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    car: state.car,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getCars, deleteCar })(CarList)