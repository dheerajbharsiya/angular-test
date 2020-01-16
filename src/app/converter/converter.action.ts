import { Action } from '@ngrx/store';

export const SET_CONVERTER_OUTPUT  = 'SET_CONVERTER_OUTPUT'

export class ConverterActions implements Action {
    readonly type = SET_CONVERTER_OUTPUT;
    
    constructor(public payload : any) {
        if(payload.type === SET_CONVERTER_OUTPUT) {
            //payload.inputValues.replace();
        }
        console.log(payload);
    }
}

