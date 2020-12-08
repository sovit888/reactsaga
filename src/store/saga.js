import {takeEvery,all,put} from "redux-saga/effects"

function *increaseData(){
    yield put({type:"INCREASE"})
}

function *decreaseData(){
    yield put({type:"DECREASE"})
}

function *increaseAsync(){
    yield takeEvery("INCREASE_ASYNC",increaseData);
}

function *decreaseAsync(){
    yield takeEvery("DECREASE_ASYNC",decreaseData);
}

function *rootsaga(){
    yield all([
        increaseAsync(),
        decreaseAsync()
    ])
}
export default rootsaga