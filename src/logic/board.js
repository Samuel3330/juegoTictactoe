import { WINNER_COMBOS } from "../constants";

//Definimos un objeto con los turnos del juego

export const checkWinnerFrom = (boardToCheck) => {
  //Revisamos todas las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //Si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square != null);
};
