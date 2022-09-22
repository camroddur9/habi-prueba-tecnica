import { AnyAction } from 'redux'

import { CURRENT_CLIENT_NAME } from './../actions';

const INIT_STATE = {
    currentClientName: ""
}

const datosClienteReducer = (state = INIT_STATE, action: AnyAction) => {
    switch(action.type){
        case CURRENT_CLIENT_NAME:
            return{
                ...state,
                currentClientName: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default datosClienteReducer