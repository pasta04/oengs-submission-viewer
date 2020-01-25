export type MarathonGameAPI = Game[];

type Game = {
  /** ゲームID */
  id: number;
  /** ゲーム名 */
  name: string;
  /** ゲームの説明 */
  description: string;
  /** 機種 */
  console: string;
  /** アスペクト比 */
  ratio: string;
  /** エミュレータ使用か */
  emulated: boolean;
  /** カテゴリ */
  categories: Category[];
  /** ユーザ */
  user: User;
};

type Category = {
  /** カテゴリID */
  id: number;
  /** カテゴリ名 */
  name: string;
  /**
   * 予定時刻
   * @description PTの後に時、分が続く。
   * @example "PT47M"
   * @example "PT1H"
   * @example "PT4H30M"
   */
  estimate: string;
  /** カテゴリ説明 */
  description: string;
  /** 動画URL */
  video: string;
  /** シングルかレースか */
  type: string;
  /** レース用のコード。シングルならnull */
  code: string;
  /** (不明)たぶんレース相手 */
  opponents: object[];
  /** (不明)たぶんレース相手のなにか */
  opponentDtos: object[];
};

type User = {
  /** ユーザID */
  id: number;
  /** ユーザ名(英) */
  username: string;
  /** ユーザ名(日) */
  usernameJapanese: string;
  /** 有効なアカウントか */
  enabled: boolean;
  /** マラソンにおける権限 */
  roles: string[];
  /** Twitterのscreen_name。@なし */
  twitterName: string;
  /** TwitchID */
  twitchName: string;
  /** Speedrun.comのユーザ名 */
  speedruncomName: string;
  /** アカウント連携しているか */
  atLeastOneAccountSynchronized: boolean;
  emailPresentForExistingUser: boolean;
};
