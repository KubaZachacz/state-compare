export type Symbol = "X" | "O";

export type PlayerIdx = 0 | 1;

export interface Square {
  symbol: Symbol | null;
}

export type MakeMove = (squareId: number) => void;

export type StartGame = (size: number, points: number) => void;

export interface PlayerData {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface PlayersDataResponse {
  results: PlayerData[];
}

export interface Stats {
  games: number;
  wins: number;
}

export interface Player {
  data: PlayerData;
  stats: Stats;
}

export type GetPlayer = (idx: PlayerIdx) => void;

export type SetStats = (idx: PlayerIdx, stats: Stats) => void;

export type UpdateStats = (winnerIdx: PlayerIdx | null) => void;
