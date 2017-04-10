/**
 * All Reducers get two parameters
 * state & actions
 */

export default function (state=null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
    }
    return state;
}