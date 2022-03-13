import { Square } from "types";

const lines = [
  [
    [-1, -1],
    [1, 1],
  ],
  [
    [-1, 0],
    [1, 0],
  ],
  [
    [0, -1],
    [0, 1],
  ],
  [
    [-1, 1],
    [1, -1],
  ],
];

export function calculateWinner(
  size: number,
  points: number,
  squares: Square[],
  lastSquareId: number
) {
  const { symbol } = squares[lastSquareId];

  const last_column = lastSquareId % size;
  const last_row = Math.floor(lastSquareId / size);

  let winner = null;

  for (let line of lines) {
    if (winner) {
      break;
    }

    let sum = 1;

    for (let direction of line) {
      let d_i = last_row + direction[0];
      let d_j = last_column + direction[1];

      let tempId = size * d_i + d_j;

      while (
        d_i >= 0 &&
        d_i < size &&
        d_j >= 0 &&
        d_j < size &&
        tempId >= 0 &&
        tempId < size * size &&
        squares[tempId].symbol === symbol &&
        sum < points
      ) {
        sum = sum + 1;

        d_i = d_i + direction[0];
        d_j = d_j + direction[1];
        tempId = size * d_i + d_j;
      }

      if (sum === points) {
        winner = symbol;

        break;
      }
    }
  }

  return winner;
}
