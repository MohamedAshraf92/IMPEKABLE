import * as actionTypes from './actionTypes'

export const login = (user, isLogged) => {
    return {
        type: actionTypes.LOGIN,
        user,
        isLogged
    }
}

export const signOut = (isLogged) => {
    return {
        type: actionTypes.SIGNOUT,
        isLogged
    }
}