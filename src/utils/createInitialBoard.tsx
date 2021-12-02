import Board from "../engine/board";
import Cell from "../engine/cell";
import Chance from "chance";

export const createInitialBoard = (boardHeight: number, boardWidth: number) => {
    const _board = new Board(boardHeight, boardWidth);
    const chance = new Chance();
  
    for (let row = 0; row < _board.cells.length; row++) {
      for (let col = 0; col < _board.cells[row].length; col++) {
        _board.cells[row][col] = new Cell(row, col, chance.bool());
      }
    }
  
    return _board;
  };