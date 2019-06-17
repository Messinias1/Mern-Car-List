import axios from 'axios'
import { GET_CARS, ADD_CAR, DELETE_CAR, CARS_LOADING } from './types'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'

export const getCars = () => dispatch => {
    dispatch(setCarsLoading()) 
    axios
        .get('/api/cars')
        .then(res => 
             dispatch({
                 type: GET_CARS,
                 payload: res.data
             })) 
             .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))        
}

export const addCar = car => (dispatch, getState) => {
    axios.post('/api/cars', car, tokenConfig(getState))  
    .then(res => dispatch({
        type: ADD_CAR,
        payload: res.data
    }))      
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))   
}

export const deleteCar = id => (dispatch, getState) => {
    axios.delete(`/api/cars/${id}`, tokenConfig(getState)).then(res => 
        dispatch({
            type: DELETE_CAR,
            payload: id
        })) 
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))          
}

export const setCarsLoading = () => {
    return {
        type: CARS_LOADING
    }
}