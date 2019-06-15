import { GET_CARS, ADD_CAR, DELETE_CAR } from './types'

export const getCars = () => {
    return {
        type: GET_CARS 
    }           
}

export const deleteCar = id => {
    return {
        type: DELETE_CAR,
        payload: id 
    }           
}