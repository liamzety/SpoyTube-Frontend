import { userService } from '../../services/userService'

export function loadUsers() {
    return dispatch => {
        userService.query()
            .then(users => {
                dispatch({ type: 'SET_USERS', users })
            })
    }
}
export function loginUser(user) {
    return dispatch => {
        return userService.login(user)
            .then(signedUser => {
                dispatch({ type: 'LOG_USER', user: signedUser })
                return user
            })

    }
}
export function signup(user) {
    return dispatch => {
        return userService.signup(user)
            .then(signedUser => {
                dispatch({ type: 'LOG_USER', user: signedUser })
                return user
            })
    }
}

export function logout() {
    return dispatch => {
        return userService.logout()
            .then(() => {
                dispatch({ type: 'LOGOUT' })
            })
    }
}

