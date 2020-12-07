import {CURRENTLY} from '../constants/Temporature'

const initialState = {
    currentTemporature : 0 
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENTLY :
            return {...state , currentTemporature: state.currentTemporature}
        default :
            return state
    }
}