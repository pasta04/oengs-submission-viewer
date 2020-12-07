import React, { useEffect } from 'react';
import './App.css';
import { ScheduleAPI } from '../types/oengus';
import * as util from '../util';

type Props = {
  title: string;
  schedule: ScheduleAPI;
  closeFunc: Function;
};

type Line = { date: Date } | ScheduleAPI['lines'];

const App: React.FC<Props> = (props: Props) => {
  const [lines, setLines] = React.useState<Line[]>([]);

  useEffect(() => {
    // 日付の境目で日付用のデータを差し込む
    const newLines = [];
    if (props.schedule.lines.length === 0) {
      setLines([]);
    } else {
      // 初回の日付
      let baseDate = new Date(props.schedule.lines[0].date);
      newLines.push({ date: baseDate });

      baseDate.setHours(0, 0, 0);
      props.schedule.lines.map(line => {
        const nextDate = new Date(line.date);
        nextDate.setHours(0, 0, 0);
        if (baseDate < nextDate) {
          newLines.push({ date: nextDate });
          baseDate = nextDate;
        }
        newLines.push(line);
      });
      setLines(newLines);
    }
  }, [props.schedule.lines[0]?.id]);

  return (
    <div className="scheduleRoot">
      <div className="scheduleHeader">
        <div className="closeButton">
          <input type={'button'} value={'×'} onClick={(): void => props.closeFunc()} />
        </div>

        <div className="scheduleTitle">{props.title}</div>
        <hr />
      </div>

      <div className="scheduleContent">
        <div>
          {lines.map((game, index) => {
            if (((game as unknown) as ScheduleAPI['lines'][0]).id) {
              const game1 = (game as unknown) as ScheduleAPI['lines'][0];
              let title = game1.gameName;
              let time = game1.estimate;
              if (game1.setupBlock) {
                if (game1.setupBlockText) {
                  title = game1.setupBlockText;
                } else {
                  title = 'セットアップブロック';
                }

                time = game1.setupTime;
              }

              return (
                <div className="scheduleLine" key={index}>
                  <div className="scheduleMain">
                    <div className="scheduleDate">{util.formatDate(new Date(game1.date), 'HH:mm')}</div>
                    <div className="scheduleGame">{title}</div>
                  </div>
                  <div className="scheduleSub">
                    <div className="scheduleCategory">{game1.categoryName}</div>
                    <div className="scheduleEst">{util.ptToTime(time)}</div>
                  </div>
                  <div className="scheduleSub">
                    <hr className="scheduleBorder" />
                  </div>
                  <div className="scheduleSub">
                    <div>{game1.runners.map(run => (run.usernameJapanese ? run.usernameJapanese : run.username)).join(' / ')}</div>
                  </div>
                </div>
              );
            } else {
              const game1 = (game as unknown) as { date: Date };
              return <div className="scheduleDateLine">{util.formatDate(game1.date, 'yyyy/MM/dd')}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
