import { AnyAction } from 'redux'

import {
    CURRENT_STEP,
    STEPS_COUNT
} from '../actions'

const INIT_STATE = {
    currentStep: -1,
    stepCount: -1
}

const layoutReducers = (state = INIT_STATE, action: AnyAction) => {
    switch(action.type){
        case CURRENT_STEP:
            return{
                ...state,
                currentStep: action.payload
            }
        case STEPS_COUNT:
            return{
                ...state,
                stepCount: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default layoutReducers