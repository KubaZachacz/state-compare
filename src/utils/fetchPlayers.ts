import { PlayersDataResponse } from "types";

export const fetchPlayers = async (results: number = 1) => {
  const res = await fetch(
    `https://randomuser.me/api/?inc=gender,name,email,picture&results=${results}`
  );
  const data: PlayersDataResponse = await res.json();

  return data.results;
};
