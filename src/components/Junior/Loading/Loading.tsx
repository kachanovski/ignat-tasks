import React, {useReducer} from 'react';
import Button from "../../../common/Button/Button";
import Preloader from './Preloader';


let initialState = {
    loading: false
}

const loadingReducer = (state = initialState, action: { type: string, payload: boolean }) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

const Loading = () => {

    const [state, dispatch] = useReducer(loadingReducer, initialState);

    function setPreloader() {
        dispatch({type: 'SET_LOADING', payload: true})
        setTimeout(() => {
            dispatch({type: 'SET_LOADING', payload: false})
        }, 3000)
    }


    return (
        <div>
            {state.loading
                ? <Preloader/>
                : null
            }
            <Button value={'PRELOADER'} onClick={setPreloader}/>
        </div>
    );
};

export default Loading;