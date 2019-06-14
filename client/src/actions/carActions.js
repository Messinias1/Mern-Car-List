import { GET_CARS, ADD_CAR, DELETE_CAR } from './types'

export const getCars = () => {
    return {
        type: GET_CARS 
    }           
}