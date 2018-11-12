import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_MOURN = 'GOT_MOURN'
const ADDED_MOURN = 'ADDED_MOURN'

/**
 * INITIAL STATE
 */

const initialState = {
    mourn: []
}
/**
 * ACTION CREATORS
 */
const gotMourn = mourn =>({type: GOT_MOURN, mourn})
const addedMourn = mourn => ({type: ADDED_MOURN, mourn})

/**
 * THUNK CREATORS
 */
export const getMourn = () => async dispatch => { 
    try { 
        const res = await axios.get('/api/mourn')
        console.log('res.data', res); 
        dispatch(gotMourn(res.data || initialState.mourn))
    } 
    catch (err) { 
        console.error(err); 
    }
}

export const addMourn = (mourn) => async dispatch => { 
    try {
        const res = await axios.post('/api/mourn', mourn)
        console.log('res.data', res); 
        dispatch(addedMourn(res.data))
    } catch (error) {
        console.error(error)
    }
}

/**
 * REDUCER
 */

export default function (state = initialState, action) { 
    switch (action.type) { 
        case GOT_MOURN: 
            return {...state, mourn: action.mourn}
        case ADDED_MOURN: 
            return {...state, mourn: [...state.mourn, action.mourn]}
        default: 
            return state; 
    }
}