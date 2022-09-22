import { AnyAction } from 'redux'

import { CURRENT_FLOOR } from './../actions';

const INIT_STATE = {
    currentFloor: -1
}

const pisoInmuebleReducer = (state = INIT_STATE, action: AnyAction) => {
    switch(action.type){
        case CURRENT_FLOOR:
            return{
                ...state,
                currentFloor: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default pisoInmuebleReducer