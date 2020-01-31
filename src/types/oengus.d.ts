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
  /** たぶんレース相手の動画情報 */
  opponents: {
    /** レース参加者ID(ユーザIDではない) */
    id: number;
    /** 動画URL */
    video: string;
  }[];
  /** (不明)たぶんレース相手のなにか */
  opponentDtos: {
    /** レース参加者ID(ユーザIDではない) */
    id: number;
    /** ユーザ情報 */
    user: User;
    /** 動画URL */
    video: string;
    /** 参加可能時刻 */
    availabilities: {
      from: string;
      to: string;
    }[];
  }[];
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
