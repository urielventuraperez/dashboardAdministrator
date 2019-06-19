import { ADD_STUDENT } from "../constants/action_types";

const initialState = {
    students: [],
}

function reducer ( state=initialState, action ){
    if(action.type === ADD_STUDENT){
        return Object.assign({}, state,{
            students: state.students.concat(action.payload)
        });
    }
    return state;
}

export default reducer;