import playerData from "./data/playerData";

const apiResponse = playerData;

export const getAllPlayers = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(apiResponse), 2000);
  });
