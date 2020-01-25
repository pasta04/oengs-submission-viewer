import React from 'react';
import './App.css';
import { ReactComponent as VideoIcon } from './video.svg';
import { MarathonGameAPI } from './types/oengus';

const App: React.SFC = () => {
  const [firstProcess, setFirstProcess] = React.useState(true);
  // マラソン種別
  const [marathonId, setMarathonId] = React.useState<string>('');
  const [submissionList, setSubmissionList] = React.useState<MarathonGameAPI>([]);

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

  const toggleDesc = (genre: 'game' | 'category', id: number) => () => {
    const dom = document.getElementById(`${genre}_desc_${id}`);
    if (!dom) return;
    const obj = dom.style;
    obj.display = obj.display == 'none' ? 'block' : 'none';
  };

  // マラソン種別のセレクトボックス選択
  React.useEffect(() => {
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
      setSubmissionList([]);
      return;
    }
    fetch(`https://oengus.io/api/marathon/${tempMarathonId}/game`).then(value => {
      value.json().then((value: MarathonGameAPI) => {
        setSubmissionList(value);
      });
    });
  }, [marathonId]);

  return (
    <div className="App">
      {/* マラソン種別 */}
      <div style={{ position: 'sticky', top: 0, backgroundColor: '#282c34' }}>
        <select value={marathonId} onChange={event => setMarathonId(event.target.value)}>
          <option value="">-</option>
          <option value="rta1kagawa">RTA 1n Kagawa Online</option>
          <option value="mysrtafes">Mystery Dungeon RTA FES</option>
        </select>
      </div>
      {/* 応募リスト */}
      <div style={{ textAlign: 'left' }}>
        {submissionList.map(submission => {
          return (
            <div key={submission.id} style={{ color: '#839496', backgroundColor: '#073642', margin: 5, borderRadius: 10, marginBottom: 10, padding: 5 }}>
              <div onClick={toggleDesc('game', submission.id)}>
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
                return (
                  <div>
                    <div key={category.id} style={{ display: 'flex' }}>
                      {/* カテゴリ名 */}
                      <div style={{ width: 'calc(100% - 90px)' }} onClick={toggleDesc('category', category.id)}>
                        {category.name}
                      </div>

                      {/* タイム */}
                      <div style={{ width: 70 }}>{ptToTime(category.estimate)}</div>
                      {/* 動画リンク */}
                      <div style={{ width: 20 }}>
                        <a href={category.video} target="_blank">
                          <VideoIcon style={{ height: 15, color: '#b58900' }} />
                        </a>
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
  );
};

export default App;
