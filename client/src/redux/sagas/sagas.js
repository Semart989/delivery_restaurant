import { call, put, takeEvery } from 'redux-saga/effects';
import cartAT from '../actionTypes/cartAT';
import categoriesAT from '../actionTypes/categoriesAT';
import dishesAT from '../actionTypes/dishesAT';

// любая асинхронная функция, обычно используется для fetch()
async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  const data = await response.json();
  return data;
}

function* postFetchSendOrder(action) {
  // console.log(action.payload, 'saga');
  try {
    const sendOrder = yield call(fetchData, {
      url: '/cart',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put({ type: cartAT.SEND_CART, payload: sendOrder });
  } catch (err) {
    yield put({ type: cartAT.INIT_ERROR, payload: err })
  }
}

function* getFetchInitCategories() {
  try {
    const categories = yield call(fetchData, {
      url: '/categories',
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    yield put({ type: categoriesAT.INIT_CATEGORIES, payload: categories });
  } catch (err) {
    yield put({ type: categoriesAT.INIT_ERROR_CATEGORIES, payload: err })
  }
}

function* getFetchInitDishes(action) {
  try {
    const dishes = yield call(fetchData, {
      url: `/categories/${action.payload}`,
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    yield put({ type: dishesAT.INIT_DISHES, payload: dishes });
  } catch (err) {
    yield put({ type: dishesAT.INIT_ERROR_DISHES, payload: err })
  }
}

export function* mySaga() {
  yield takeEvery(cartAT.POST_SEND_CART, postFetchSendOrder);
  yield takeEvery(categoriesAT.GET_FETCH_CATEGORIES, getFetchInitCategories);
  yield takeEvery(dishesAT.GET_FETCH_DISHES, getFetchInitDishes);
}
