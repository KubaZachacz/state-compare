import { Square } from "types";

export function getEmptySquares(size: number): Square[] {
  return new Array(size * size).fill({ symbol: null });
}
