import { CURRENT_DEPARMENT, CURRENT_MUNICIPALITY, CURRENT_ADDRESS } from './../actions';

export const setCurrentDeparment = (deparment: string) => ({
    type: CURRENT_DEPARMENT,
    payload: deparment
})

export const setCurrentMunicipality = (municipality: string) => ({
    type: CURRENT_MUNICIPALITY,
    payload: municipality
})

export const setCurrentAddress = (address: string) => ({
    type: CURRENT_ADDRESS,
    payload: address
})