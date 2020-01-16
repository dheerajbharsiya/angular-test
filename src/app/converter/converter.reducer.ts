import { InitialState } from '@ngrx/store/src/models';
import { SET_CONVERTER_OUTPUT } from './converter.action';
let initialState : Object = {
    converterDigits : [1,2,3,4,5,6,7,8,9,'#', 0, '<--']
};

export function converterReducer(state: InitialState<object> = initialState, action) {
    switch (action.type) {
        case SET_CONVERTER_OUTPUT :
        return Object.assign({}, state, action.payload);
        break;
        default: 
        return state;
    }
}
