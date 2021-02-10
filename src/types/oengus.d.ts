export type MarathonGameAPI = Game[];
export type MarathonSubmissionAPI = {
  id: number;
  user: User;
  games: Omit<Game, 'user'>[];
  availabilities: {
    from: string;
    to: string;
  }[];
  answers: {
    id: number;
    question: Questions;
    /**
     * 回答
     * @description チェックボックスの場合は、文字列で"true"になる。
     */
    answer: string | null;
    /** 必須項目か */
    answerRequired: boolean;
  }[];
  opponents: null;
  opponentDtos: null;
  user: User;
}[];

export type MarathonListAPI = {
  next: MarathonInfo[];
  open: MarathonInfo[];
  live: MarathonInfo[];
};

export type MarathonAPI = {
  /**
   * イベントのID
   * @example "rtaij2019"
   */
  id: string;
  /** イベント名 */
  name: string;
  /** イベント作成者 */
  creater: User;
  /**
   * 開始日時
   * @example "2019-12-27T03:00:27Z"
   */
  startDate: string;
  /** 終了日時 */
  endDate: string;
  /** 説明 */
  description: string;
  /** オフライン開催か */
  onsite: false;
  /** 開催地 */
  location: string | null;
  /**
   * 言語
   * @example "ja"
   */
  language: string;
  /** 走者ごとに応募できる最大ゲーム数 */
  maxGamesPerRunner: number;
  /** ゲームごとに応募できる最大カテゴリ数 */
  maxCategoriesPerGame: number;
  /** レースや協力プレイを応募できるか */
  hasMultiplayer: boolean;
  /** レースや協力プレイでの最大走者数 */
  maxNumberOfScreens: number;
  /** イベントのTwitchID */
  twitch: string;
  /** イベントのTwitter ScreenName */
  twitter: string;
  /** DiscordID */
  discord: string;
  /**
   * 国
   * @example "JP"
   */
  country: string | null;
  discordPrivacy: boolean;
  /** 応募受付中 */
  submitsOpen: boolean;
  /** @example "PT10M" */
  defaultSetupTime: string;
  /** 選考が完了していたらtrue */
  selectionDone: boolean;
  /** スケジュールが公開されていたらtrue */
  scheduleDone: boolean;
  isPrivate: boolean;
  /** モデレータ */
  moderators: User[];
  hasIncentives: boolean;
  /** 応募を編集できるか */
  canEditSubmissions: boolean;
  /** 追加項目 */
  questions: Questions[];
  hasDonations: boolean;
  payee: null;
  supportedCharity: null;
  /** ISO-4217 format for Paypal */
  donationCurrency: null;
  donationWebhook: null;
  donationsTotal: null;
  hasSubmitted: null;
};

export type SelectionAPI = {
  [categoryId: number]: {
    /** 選考結果ID */
    id: number;
    /** カテゴリID */
    categoryId: number;
    /**
     * 選考結果
     * - TODO: 保留
     * - VALIDATED: 当選
     * - REJECTED: 落選
     * - BONUS: ボーナス
     */
    status: SelectionStatus;
  };
};
export type SelectionStatus = 'TODO' | 'VALIDATED' | 'REJECTED' | 'BONUS' | 'BACKUP';

export type MarathonInfo = Pick<MarathonAPI, 'id' | 'name' | 'startDate' | 'endDate' | 'onsite' | 'location' | 'country' | 'language'>;

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
  type: CategoryType;
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

type CategoryType = 'SINGLE' | 'RACE' | 'COOP' | 'COOP_RACE';

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

type Questions = {
  id: number;
  label: string;
  /**
   * フィールド種別
   * - TEXT: 1行テキスト
   * - SELECT: セレクトボックス
   * - CHECKBOX: チェックボックス
   * - FREETEXT: 選択項目ではなく、単純にテキストとして何か表示する。マークダウンが使える。
   */
  fieldType: 'TEXT' | 'SELECT' | 'TEXTAREA' | 'CHECKBOX' | 'FREETEXT';
  /** 選択肢 */
  options: string[];
  questionType: 'SUBMISSION';
  /** FREETEXT用の文章 */
  description: string | null;
  position: number;
};

export type ScheduleAPI = {
  id: number;
  lines: {
    categoryId: number;
    categoryName: string;
    console: string;
    customRun: boolean;
    date: string;
    emulated: boolean;
    estimate: string;
    gameName: string;
    id: number;
    position: number;
    ratio: string;
    runners: User[];
    setupBlock: boolean;
    setupBlockText: string | null;
    setupTime: string;
    type: CategoryType;
  }[];
};
