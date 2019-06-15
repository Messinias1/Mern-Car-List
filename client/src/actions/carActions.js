import axios from 'axios'
import { GET_CARS, ADD_CAR, DELETE_CAR, CARS_LOADING } from './types'

export const getCars = () => dispatch => {
    dispatch(setCarsLoading()) 
    axios
        .get('/api/cars')
        .then(res => 
             dispatch({
                 type: GET_CARS,
                 payload: res.data
             })
         )         
}

export const addCar = car => dispatch => {
    axios.post('/api/cars', car)  
    .then(res => dispatch({
        type: ADD_CAR,
        payload: res.data
    }))         
}

export const deleteCar = id => {
    return {
        type: DELETE_CAR,
        payload: id 
    }           
}

export const setCarsLoading = () => {
    return {
        type: CARS_LOADING
    }
}