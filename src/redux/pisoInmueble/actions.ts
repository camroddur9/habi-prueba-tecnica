import { CURRENT_FLOOR } from './../actions';

export const setCurrentFloor = (floor: number) => ({
    type: CURRENT_FLOOR,
    payload: floor
})