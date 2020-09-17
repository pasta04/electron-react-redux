import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../../renderer/renderer/actions';
type Action = ActionType<typeof actions>;

export type GlobalState = {
  /** 通知欄 */
  notify: {
    /** 表示可否 */
    show: boolean;
    /** 色 */
    type: 'info' | 'warning' | 'error';
    /** メッセージ */
    message: string;
    /** 手動で閉じられるか */
    closable: boolean;
  };
};

export type RootState = {
  reducer: GlobalState;
};

const initial: GlobalState = {
  notify: {
    show: false,
    type: 'info',
    message: 'ここが更新されるよ',
    closable: true,
  },
};

const reducer = (state: GlobalState = initial, action: Action): GlobalState => {
  console.log(action);

  switch (action.type) {
    case getType(actions.changeNotify): {
      return { ...state, notify: { ...action.payload } };
    }
    case getType(actions.closeNotify): {
      return { ...state, notify: { ...state.notify, show: false } };
    }
    default:
      return state;
  }
};

export default combineReducers({ reducer });
