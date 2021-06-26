import {BUTTON_CHOOSE, BUTTON_DELETE} from '../actions/types';
const initialState = {};

export default function (state = initialState, action){
    switch (action.type){
        case BUTTON_CHOOSE:
            console.log('true');
            return state = "true";

        case BUTTON_DELETE:
            console.log('false');
            return state = "false";
           
        default:
            return state;
    }
}