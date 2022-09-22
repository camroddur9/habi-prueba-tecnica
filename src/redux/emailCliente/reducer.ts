import { AnyAction } from 'redux'

import { CURRENT_CLIENT_EMAIL } from './../actions';

const INIT_STATE = {
    currentClientEmail: ""
}

const emailClienteReducer = (state = INIT_STATE, action: AnyAction) => {
    switch(action.type){
        case CURRENT_CLIENT_EMAIL:
            return{
                ...state,
                currentClientEmail: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default emailClienteReducer