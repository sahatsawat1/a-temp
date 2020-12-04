import {CURRENTLY} from '../constants/temporature'

const initialState = {
    count : 0 
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CURRENTLY :
            return {...state , count: state.count}
        default :
            return state
    }
}