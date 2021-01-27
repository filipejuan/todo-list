import { takeEvery, takeLatest, put, call, select, delay } from 'redux-saga/effects';
import api from '../services/api';

export default function* rootSaga() {
    yield takeLatest('ASYNC_GET_LIST', asyncGetList);
    yield takeLatest('ASYNC_UPDATE_LIST', asyncUpdateList);
    yield takeLatest('ASYNC_CREATE_ITEM', asyncCreateList);
    yield takeLatest('ASYNC_DELETE_ITEM', asyncDeleteList);
    yield takeLatest('SEARCH', filterList);
}

function* asyncGetList() {
    try {
        const response = yield call(api.get, '/list');
        const list = response.data.result;

        yield put({ type: 'LOAD_LIST', payload: list });
    } catch (err){
        console.log(err)
    }
}

function* asyncUpdateList() {
    try {
        const id = yield select(state => state.AppReducer.id);
        const description = yield select(state => state.AppReducer.description);
        const checked = yield select(state => state.AppReducer.checked);

        const list = { id, description, checked }

        yield call(api.put, '/list', list);

        yield put({ type: 'ASYNC_GET_LIST' });
        yield put({ type: 'FINISH_EDIT' });
    } catch (err){
        console.log(err)
    }
}

function* asyncCreateList() {
    try {
        const description = yield select(state => state.AppReducer.description);
        const checked = yield select(state => state.AppReducer.checked);

        const list = { description, checked }

        yield call(api.post, '/list', list);
        
        yield put({ type: 'ASYNC_GET_LIST' });
        yield put({ type: 'FINISH_CREATE' });
    } catch (err){
        console.log(err)
    }
}

function* asyncDeleteList(action) {
    try {
        const itemID = action.payload

        yield call(api.delete, `/list/${itemID}`);
        
        yield put({ type: 'ASYNC_GET_LIST' });
    } catch (err){
        console.log(err)
    }
}

function* filterList(action) {
    const filter = action.payload;

    const list = yield select(state => state.AppReducer.FullList);

    const filteredList = list.filter(
        item => {
            return item.description.indexOf(filter) !== -1;
        }
    );

    yield put({ type: 'FILTERED_LIST', payload: filteredList });
}