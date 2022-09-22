import { CURRENT_CLIENT_NAME } from './../actions';

export const setCurrentClientName = (currentName: string) => ({
        type: CURRENT_CLIENT_NAME,
        payload: currentName
})