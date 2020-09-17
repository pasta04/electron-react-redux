import { select, call, put, take, takeEvery, race } from 'redux-saga/effects';
import * as actions from '../../renderer/renderer/actions';
import { ipcMain } from 'electron';

export default function* rootSaga() {
  yield takeEvery(actions.closeNotify, closeNotify);
}

function* errorHandler(error: any) {
  try {
    const message = (error.message as string) || '予期せぬエラーが発生しました。';
    yield put(actions.changeNotify(true, 'error', message));
  } catch (e) {
    console.error('★激辛だ★');
  }
}

function* closeNotify() {
  try {
    console.log('[closeNotify] some function...');
    globalThis.electron.mainWindow.close();
  } catch (error) {
    yield call(errorHandler, error);
  }
}
