import * as ActionTypes from "../actions/action-types";

var defaultState = {
    color: 'red'
};

export default function changeText(state=defaultState, action) {
    switch (action.type) {
        case ActionTypes.ACTION_CHANGE_COLOR: {
            return {...state, color: action.color }
        }
        default: {
            return state;
        }
    }
}