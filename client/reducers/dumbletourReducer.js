import * as types from '../actions/actionTypes.js'

const initialState = {
    registrationIsOpen: false
}

const dumbletourReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.START_REGISTRATION: {
            const registrationIsOpen = true;
            return {
                ...state,
                registrationIsOpen
            }
        }

        case types.COMPLETE_REGISTRATION: {
            const registrationIsOpen = false;
            return {
                ...state,
                registrationIsOpen
            }
        }

        default:
        return state;
    }

}

export default dumbletourReducer;