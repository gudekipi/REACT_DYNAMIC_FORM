import { ActionTypes, SendDataAction, FormValues, FormField } from '../interfaces/index'
import { fetchData, sendData } from '../api/formAPI'

export const fetchFormData = () => async (dispatch: any) => {
    try {
        dispatch({
            type: ActionTypes.FETCH_LOADING,
        });
        const response = await fetchData();
        dispatch({ type: ActionTypes.FETCH_DATA, payload: response.data });
    } catch (error) {
        dispatch({
            type: ActionTypes.FETCH_DATA_FAIL,
            payload: error,
        });
    }

};

export const sendFormData = (data: FormValues) => async (dispatch: any) => {
    try {
        dispatch({
            type: ActionTypes.SEND_LOADING,
        });
        const response = await sendData(data);
        dispatch({
            type: ActionTypes.SEND_DATA,
            payload: response
        } as SendDataAction);
    } catch (error) {
        dispatch({
            type: ActionTypes.SEND_DATA_FAIL,
            payload: error,
        });
    }
}
  
