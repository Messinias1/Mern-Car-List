import uuid from 'uuid'
import { GET_CARS, ADD_CAR, DELETE_CAR } from '../actions/types'

const initialState = {
    cars: [
        { id: uuid(), name: 'Camaro' },
        { id: uuid(), name: 'Mustang' },
        { id: uuid(), name: 'Challenger' },
        { id: uuid(), name: 'GT' }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARS: 
        return {
            ...state
        }
        default:
            return state      
    }
}