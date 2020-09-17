import electron from 'electron';
import React from 'react';
import * as actions from '../actions';
import { RootState } from '../../../main/reducer';

const ipcRenderer = electron.ipcRenderer;

const App: React.FunctionComponent<RootState> = (props: RootState) => {
  const handleClick = () => {
    ipcRenderer.send('dispatch-store', actions.changeNotify(true, 'info', 'ボタンで更新した'));
  };
  const handleClick2 = () => {
    ipcRenderer.send('dispatch-store', actions.closeNotify());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <div>
      <div style={{ width: '80vw' }}>
        <input type="button" onClick={handleClick} value="通知ボタン" />
        <input type="text" style={{ width: '100%' }} value={props.reducer.notify.message} onChange={handleChange} />
      </div>
      <input type="button" onClick={handleClick2} value="閉じるボタン" />
    </div>
  );
};

export default App;
