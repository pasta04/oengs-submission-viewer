import React from 'react';
import marked from 'marked';
import * as util from '../util';
import './App.css';
import { MarathonAPI } from '../types/oengus';

const MarathonInfoView = (props: { marathon: MarathonAPI; closeFunc: Function }): JSX.Element => {
  return (
    <div style={{ height: '100%', width: 1000 }}>
      <div style={{ height: 20, textAlign: 'right' }}>
        <input type={'button'} value={'×'} onClick={(): void => props.closeFunc()} />
      </div>
      <div style={{ height: 'calc(100% - 50px)' }}>
        {/* イベント名 */}
        <div style={{ fontSize: 20 }}>{props.marathon.name}</div>
        {/* 開始日 */}
        <div>開始：{util.formatDate(new Date(props.marathon.startDate), 'yyyy/MM/dd HH:mm')}</div>

        {/* 終了日 */}
        <div>終了：{util.formatDate(new Date(props.marathon.endDate), 'yyyy/MM/dd HH:mm')}</div>

        <hr />
        {/* 説明 */}
        <div style={{ overflowY: 'scroll', height: 'calc(100% - 80px)', textAlign: 'initial', fontSize: 'small' }}>
          <div dangerouslySetInnerHTML={{ __html: marked(props.marathon.description) }} />
        </div>
      </div>
    </div>
  );
};

export default MarathonInfoView;
