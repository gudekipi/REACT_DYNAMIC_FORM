import { ActionTypes, State, Action } from '../interfaces/index';

const initialState: State = {
    formData: [],
    isLoading: false,
    responseData: undefined,
    error: undefined,
};

export const formReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case ActionTypes.FETCH_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.FETCH_DATA:
            return {
                ...state,
                formData: action.payload,
                isLoading: false,
            };
        case ActionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case ActionTypes.SEND_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.SEND_DATA:
            return {
                ...state,
                responseData: action.payload,
                isLoading: false,
            };
        case ActionTypes.SEND_DATA_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};