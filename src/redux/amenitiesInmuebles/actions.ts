import { AMENITIES_ARRAY } from './../actions';

export const setAmenitiesArray = (amenitie: Array<String>) => ({
        type: AMENITIES_ARRAY,
        payload: amenitie
})