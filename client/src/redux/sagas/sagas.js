import { call, put, takeEvery } from 'redux-saga/effects';
import cartAT from '../actionTypes/cartAT';
import categoriesAT from '../actionTypes/categoriesAT';

// любая асинхронная функция, обычно используется для fetch()
async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  const data = await response.json();
  return data;
}

function* postFetchSendOrder(action) {
  try {
    const sendOrder = yield call(fetchData, {
      url: 'http://localhost:4000/cart',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put({ type: cartAT.SEND_CART, payload: sendOrder });
  } catch (err) {
    yield put({ type: cartAT.INIT_ERROR, payload: err })
  }
}

// function* getFetchInitCategories(action) {
//   try {
//     const categories = yield call(fetchData, {
//       url: 'http://localhost:4000/categories',
//       method: 'GET',
//       headers: { 'content-type': 'application/json' },
//       // body: JSON.stringify(action.payload),
//     });
//     console.log('CATEGORIES', categories);
//     yield put({ type: categoriesAT.INIT_CATEGORIES, payload: categories });
//   } catch (err) {
//     yield put({ type: categoriesAT.INIT_ERROR_CATEGORIES, payload: err })
//   }
// }

export function* mySaga() {
  yield takeEvery(cartAT.POST_SEND_CART, postFetchSendOrder);
  // yield takeEvery(categoriesAT.GET_CATEGORIES, getFetchInitCategories);
}
