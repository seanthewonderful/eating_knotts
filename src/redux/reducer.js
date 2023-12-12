const initialState = {
    userId: null,
    adminId: null,
    restaurantId: null,
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'USER_AUTH':
            return {
                ...state,
                userId: action.payload,
            }

        case 'ADMIN_AUTH': 
            return {
                ...state, 
                adminId: action.payload,
            }

        case 'SET_RESTAURANT':
            return {
                ...state,
                restaurantId: action.payload
            }

        case 'LOGOUT':
            return {
                ...state,
                userId: null,
                adminId: null,
            }

        default: 
            return state
    }
}

export default reducer