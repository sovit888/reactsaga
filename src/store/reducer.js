import {combineReducers} from "redux"
const counter=(state=0,action)=>{
    switch(action.type){
        case "INCREASE":
            return state+1;
        case "DECREASE":
            return state-1;
        default:
            return state;
    }
}
const reducer=combineReducers({counter:counter})
export default reducer