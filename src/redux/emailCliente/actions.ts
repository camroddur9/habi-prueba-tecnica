import { CURRENT_CLIENT_EMAIL } from './../actions';

export const setCurrentClientEmail = (currentEmail: string) => ({
    type: CURRENT_CLIENT_EMAIL,
    payload: currentEmail
})