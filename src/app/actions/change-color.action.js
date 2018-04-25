import * as ActionTypes from "./action-types";

export function changeColorRed() {
    return {
        type: ActionTypes.ACTION_CHANGE_COLOR,
        color: 'red'
    }
}

export function changeColorBlue() {
    return {
        type: ActionTypes.ACTION_CHANGE_COLOR,
        color: 'blue'
    }
}

export function changeColorGreen() {
    return {
        type: ActionTypes.ACTION_CHANGE_COLOR,
        color: 'green'
    }
}