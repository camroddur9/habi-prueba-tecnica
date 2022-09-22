import { AnyAction } from 'redux'

import { 
    CURRENT_DEPARMENT, 
    CURRENT_MUNICIPALITY, 
    CURRENT_ADDRESS 
} from './../actions';

const INIT_STATE = {
    currentDeparment: "",
    currentMunicipality: "",
    currenAddress: ""
}

const direccionInmuebleReducer = (state = INIT_STATE, action: AnyAction) => {
    switch(action.type){
        case CURRENT_DEPARMENT:
            return{
                ...state,
                currentDeparment: action.payload
            }
        case CURRENT_MUNICIPALITY:
            return{
                ...state,
                currentMunicipality: action.payload
            }
        case CURRENT_ADDRESS:
            return{
                ...state,
                currenAddress: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default direccionInmuebleReducer