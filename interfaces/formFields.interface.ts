import { ActionTypes } from '../interfaces/index';

export interface FormField {
    fieldName: string;
    type: string;
    value: string | number;
    options?: Array<string>;
  }
export interface FormValues {
    [fieldName: string]: string | number;
  }

export interface FetchDataAction {
    type: ActionTypes.FETCH_DATA;
    payload: FormField[];
}

export interface SendDataAction {
    type: ActionTypes.SEND_DATA;
    payload: any;
}

export interface FetchLoadingAction {
    type: ActionTypes.FETCH_LOADING;
}
 
export interface SendLoadingAction {
    type: ActionTypes.SEND_LOADING;
}

export interface FetchDataFailedAction {
    type: ActionTypes.FETCH_DATA_FAIL;
    payload: FormField[];
}

export interface SendDataFailedAction {
    type: ActionTypes.SEND_DATA_FAIL;
    payload: any;
}

export type Action = FetchDataAction | SendDataAction |  FetchLoadingAction | SendLoadingAction | FetchDataFailedAction | SendDataFailedAction ;

export interface State {
    formData: FormField[];
    responseData?: any;
    error: any;
    isLoading: boolean;
}