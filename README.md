# Game of Life

This project is an implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using TypeScript and React.

> The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

The cells on the board conform to the following rules:

- A cell can be made "alive"
- A cell can be "killed"
- A cell with fewer than two live neighbours dies of under-population
- A cell with 2 or 3 live neighbours lives on to the next generation
- A cell with more than 3 live neighbours dies of overcrowding
- An empty cell with exactly 3 live neighbours "comes to life"

A user can manually toggle a cell to be dead or alive by clicking on the board.

The board evolution can be paused/started using the "Pause"/"Start" button. The board can also be reset using the "Reset" button.