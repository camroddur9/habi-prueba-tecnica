import { AnyAction } from 'redux'

import { AMENITIES_ARRAY  } from './../actions';

const INIT_STATE = {
    amenitiesArray: []
}

const amenitiesReducer = (state = INIT_STATE, action: AnyAction) => {
    switch(action.type){
        case AMENITIES_ARRAY:
            return{
                ...state,
                amenitiesArray: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default amenitiesReducer