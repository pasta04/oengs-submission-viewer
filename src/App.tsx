import React from 'react';
import marked from 'marked';
import './App.css';
import { ReactComponent as VideoIcon } from './video.svg';
import { MarathonGameAPI, MarathonAPI, MarathonListAPI, SelectionAPI, SelectionStatus, MarathonInfo } from './types/oengus';

const API_BASE = 'https://oengus.io/api/';

async function fetchJson<T>(url: string): Promise<T> {
  const result = await fetch(url);
  const json = await result.json();
  return json as T;
}

const fetchEventList = async (): Promise<MarathonListAPI> => {
  const url = `${API_BASE}marathon`;
  return await fetchJson<MarathonListAPI>(url);
};

/** 半年先までのイベント情報を取得 */
const fetchFutureEventList = async (): Promise<MarathonAPI[]> => {
  const now = new Date();
  const start = now.toISOString();
  // 半年後
  now.setMonth(now.getMonth() + 6);
  const end = now.toISOString();

  const url = `${API_BASE}marathon/forDates?start=${start}&end=${end}&zoneId=Asia/Tokyo`;
  return await fetchJson<MarathonAPI[]>(url);
};

const fetchEventInfo = (eventId: string): Promise<MarathonAPI> => {
  const url = `${API_BASE}marathon/${eventId}`;
  return fetchJson<MarathonAPI>(url);
};

const fetchEventGameList = (eventId: string): Promise<MarathonGameAPI> => {
  const url = `${API_BASE}marathon/${eventId}/game`;
  return fetchJson<MarathonGameAPI>(url);
};

const fetchSelectionList = (eventId: string): Promise<SelectionAPI> => {
  const url = `${API_BASE}marathon/${eventId}/selection`;
  return fetchJson<SelectionAPI>(url);
};

/** ESTのPTとかの時刻形式をHH:MM:SSの形式にする */
const ptToTime = (estimate: string): string => {
  let str = '';
  const hourMatch = estimate.match(/(\d+)H/);
  if (hourMatch && hourMatch.length === 2) {
    str += `${hourMatch[1]}:`.padStart(3, '0');
  } else {
    str += '00:';
  }

  const minuteMatch = estimate.match(/(\d+)M/);
  if (minuteMatch && minuteMatch.length === 2) {
    str += `${minuteMatch[1]}:`.padStart(3, '0');
  } else {
    str += '00:';
  }

  const secondMatch = estimate.match(/(\d+)S/);
  if (secondMatch && secondMatch.length === 2) {
    str += `${secondMatch[1]}`.padStart(2, '0');
  } else {
    str += '00';
  }

  return str;
};

const formatDate = (date: Date, format: string): string => {
  format = format.replace(/yyyy/g, `${date.getFullYear()}`);
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
  return format;
};

/** ユニーク処理 */
function filterUniqueItemsById<T>(array: T[], key: string): T[] {
  // idを集約した配列を作成
  const itemIds = array.map(item => {
    return (item as any)[key];
  });
  return array.filter((item, index) => {
    return itemIds.indexOf((item as any)[key]) === index;
  });
}

/** 詳細文の開閉 */
const toggleDesc = (genre: 'game' | 'category', id: number, display?: 'block' | 'none') => (): void => {
  const dom = document.getElementById(`${genre}_desc_${id}`);
  if (!dom) return;
  const obj = dom.style;
  // 指定されていればそのとおり上書き、指定されてなければ切り替え
  if (display) {
    obj.display = display;
  } else {
    obj.display = obj.display === 'none' ? 'block' : 'none';
  }
};

const selectedToClassName = (status: SelectionStatus): string => {
  switch (status) {
    case 'VALIDATED':
      return 'validated';
    case 'REJECTED':
      return 'rejected';
    case 'BONUS':
      return 'bonus';
    default:
      return '';
  }
};

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
        <div>開始：{formatDate(new Date(props.marathon.startDate), 'yyyy/MM/dd HH:mm')}</div>

        {/* 終了日 */}
        <div>終了：{formatDate(new Date(props.marathon.endDate), 'yyyy/MM/dd HH:mm')}</div>

        <hr />
        {/* 説明 */}
        <div style={{ overflowY: 'scroll', height: 'calc(100% - 80px)', textAlign: 'initial', fontSize: 'small' }}>
          <div dangerouslySetInnerHTML={{ __html: marked(props.marathon.description) }} />
        </div>
      </div>
    </div>
  );
};

const App: React.SFC = () => {
  // マラソンリスト
  const [marathonList, setMarathonList] = React.useState<MarathonInfo[]>([]);
  // 初期処理
  const [firstProcess, setFirstProcess] = React.useState(true);
  // マラソン種別
  const [marathonId, setMarathonId] = React.useState<string>('');
  // マラソン情報
  const [marathonInfo, setMaraathonInfo] = React.useState<MarathonAPI>();
  // 応募リスト
  const [submissionList, setSubmissionList] = React.useState<MarathonGameAPI>([]);
  // 選考結果
  const [selectionList, setSelectionList] = React.useState<SelectionAPI>({});
  // 落選を非表示
  const [filterReject, setFilterReject] = React.useState(false);
  // 概要を表示
  const [isShowMarathonInfo, setIsShowMarathonInfo] = React.useState(false);
  // 一括開閉の状態
  const [isToggleAllDescription, setIsToggleAllDescription] = React.useState(false);

  // メッセージ
  const [message, setMessage] = React.useState<string>('');

  // 処理中はメニュー非活性
  const [disabledMenu, setDisabledMenu] = React.useState(false);

  // マラソンリスト取得
  React.useEffect(() => {
    const init = async (): Promise<void> => {
      try {
        const eventList = await fetchEventList();
        const futureList = await fetchFutureEventList();
        const list = [...eventList.live, ...eventList.open, ...eventList.next, ...futureList];
        // IDでユニーク
        const newList = filterUniqueItemsById(list, 'id');

        // 名前でソート
        newList.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        setMarathonList(newList);
      } catch (e) {
        // どうしようか
      }
    };
    init();
  }, []);

  // マラソン種別のセレクトボックス選択
  React.useEffect(() => {
    setDisabledMenu(true);
    let tempMarathonId = marathonId;
    if (firstProcess) {
      if (window.location.search) {
        const queryId = window.location.search.match(/marathon=(.*)/);
        if (queryId && queryId?.length === 2) {
          setMarathonId(queryId[1]);
          tempMarathonId = queryId[1];
        }
      }
      setFirstProcess(false);
    }

    if (!tempMarathonId) {
      setMaraathonInfo(undefined);
      setMessage('イベントを選択してください。');
      setSubmissionList([]);
      setDisabledMenu(false);
      return;
    }
    setMessage('データ取得中...');

    const fetchData = async (eventId: string): Promise<void> => {
      try {
        const eventData = await fetchEventInfo(eventId);
        setMaraathonInfo(eventData);
        const gameData = await fetchEventGameList(eventId);
        if (eventData.selectionDone) {
          const selection = await fetchSelectionList(eventId);
          setSelectionList(selection);
        }
        setSubmissionList(gameData);
        setMessage(`応募ゲーム数：${gameData.length}`);
      } catch (e) {
        setMessage(`データ取得でエラーがありました。`);
      } finally {
        setDisabledMenu(false);
      }
    };

    fetchData(tempMarathonId);
  }, [marathonId]);

  const showMarathonInfo = (): void => setIsShowMarathonInfo(true);
  const toggleOpenClose = (): void => {
    const displayType = isToggleAllDescription ? 'none' : 'block';
    for (const submission of submissionList) {
      toggleDesc('game', submission.id, displayType)();
      for (const category of submission.categories) {
        toggleDesc('category', category.id, displayType)();
      }
    }

    setIsToggleAllDescription(!isToggleAllDescription);
  };
  const closeMarathonInfo = (): void => setIsShowMarathonInfo(false);

  return (
    <div className="App">
      {/* マラソン情報 */}
      {isShowMarathonInfo && marathonInfo && (
        <div className={'modal'}>
          <MarathonInfoView marathon={marathonInfo} closeFunc={closeMarathonInfo} />
        </div>
      )}

      {!isShowMarathonInfo && (
        <div>
          {/* マラソン種別 */}
          <div className={'header'}>
            <div>
              <select value={marathonId} onChange={(event): void => setMarathonId(event.target.value)} disabled={disabledMenu}>
                <option value="">-</option>
                {marathonList.map((marathon, index) => (
                  <option key={`${marathon.id}_${index}`} value={marathon.id}>
                    {marathon.name}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ visibility: marathonInfo ? 'visible' : 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ marginRight: 10 }}>
                  <input type={'button'} value={'概要を見る'} onClick={showMarathonInfo} />
                </div>
                <div style={{ marginRight: 10 }}>
                  <input type={'button'} value={'応募の一括開閉'} onClick={toggleOpenClose} />
                </div>
                <div style={{ visibility: marathonInfo?.selectionDone ? 'visible' : 'hidden' }}>
                  <label htmlFor="filter_check">当選のみ</label>
                  <input id="filter_check" type={'checkbox'} onChange={(): void => setFilterReject(!filterReject)} checked={filterReject} />
                </div>
              </div>
            </div>
          </div>

          {/* 応募リスト */}
          <div style={{ textAlign: 'left', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'block', width: 1000 }}>
              <div className="message">{message}</div>
              {submissionList.map(submission => {
                // 採用されたカテゴリがあれば色をつける
                let gameClass = '';
                const selectedResult = {
                  TODO: 0,
                  VALIDATED: 0,
                  REJECTED: 0,
                  BONUS: 0,
                };
                for (const category of submission.categories) {
                  if (selectionList[category.id]) {
                    selectedResult[selectionList[category.id].status] += 1;
                  } else {
                    selectedResult.TODO += 1;
                  }
                }
                if (selectedResult.VALIDATED > 0) {
                  gameClass = 'validated';
                } else if (selectedResult.BONUS > 0) {
                  gameClass = 'bonus';
                } else if (selectedResult.TODO > 0) {
                  gameClass = '';
                } else {
                  gameClass = 'rejected';
                }
                // フィルターオンで、採用されたカテゴリが0件
                if (filterReject && selectedResult.REJECTED === submission.categories.length) return '';

                return (
                  <div key={submission.id} className={`submissionBase`}>
                    <div className={gameClass} onClick={toggleDesc('game', submission.id)}>
                      {/* ゲームタイトル */}
                      <div style={{ display: 'flex' }}>
                        <div style={{ width: 70 }}>ゲーム：</div>
                        <div style={{ width: 'calc(100% - 70px)' }}>{submission.name}</div>
                      </div>
                      {/* 走者 */}
                      <div style={{ display: 'flex' }}>
                        <div style={{ width: 70 }}>走者：</div>
                        <div style={{ width: 'calc(100% - 70px)' }}>{submission.user.usernameJapanese ? submission.user.usernameJapanese : submission.user.username}</div>
                      </div>
                      {/* 機種 */}
                      <div style={{ display: 'flex' }}>
                        <div style={{ width: 70 }}>機種：</div>
                        <div style={{ width: 'calc(100% - 70px)' }}>{submission.console}</div>
                      </div>
                      {/* 説明 */}
                      <div id={`game_desc_${submission.id}`} style={{ display: 'none', clear: 'both' }}>
                        {submission.description}
                      </div>
                    </div>
                    <hr />

                    {/* カテゴリ */}
                    {submission.categories.map(category => {
                      // 選考結果
                      const result = selectionList[category.id] ? selectionList[category.id].status : 'TODO';
                      if (filterReject && result === 'REJECTED') return '';
                      const categoryClass = selectedToClassName(result);

                      return (
                        <div key={category.id} className={categoryClass}>
                          <div onClick={toggleDesc('category', category.id)}>
                            <div key={category.id} style={{ display: 'flex' }}>
                              {/* カテゴリ名 */}
                              <div className={'categoryName'}>{category.name}</div>

                              {/* タイム */}
                              <div style={{ width: 70 }}>{ptToTime(category.estimate)}</div>
                              {/* 動画リンク */}
                              <div style={{ width: 20 }} onClick={(e: React.MouseEvent<HTMLDivElement>): void => e.stopPropagation()}>
                                <a href={category.video} target="_blank" rel="noopener noreferrer">
                                  <VideoIcon style={{ height: 15, color: '#b58900' }} />
                                </a>
                              </div>
                            </div>
                            <div>
                              {category.opponentDtos.map(opp => {
                                return (
                                  <div key={`${category.id}_${opp.id}`} style={{ display: 'flex' }}>
                                    {/* レース相手のユーザ名 */}
                                    <div style={{ width: 'calc(100% - 20px)' }}>
                                      {category.type}：{opp.user.usernameJapanese ? opp.user.usernameJapanese : opp.user.username}
                                    </div>

                                    {/* 動画リンク */}
                                    <div style={{ width: 20 }}>
                                      <a href={opp.video} target="_blank" rel="noopener noreferrer">
                                        <VideoIcon style={{ height: 15, color: '#b58900' }} />
                                      </a>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          {/* カテゴリ名クリックで展開する、カテゴリ説明 */}
                          <div id={`category_desc_${category.id}`} style={{ display: 'none', clear: 'both' }}>
                            {category.description}
                          </div>
                          <hr className={'categoryLine'} />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
