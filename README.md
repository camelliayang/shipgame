# React Battle ship
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the project

First in the project directory please run:
`npm i`

Then you can run:
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Game Instructions
The default board numbers are:
  board size: 4
  numShips: 3
  shipLength: 2

Once you decide the row and column number, just input it and click `Fire`
You will see the message and decide the next move.

If you miss any move, you will see:
`You missed`

If you hit any ship, you will see:
`HIT`

If you already hit that location and fire again, you will see:
`Oops, you already hit that location`

If you sank one ship, you will see:
`You sank my battleship!`

Once you win the game, you will see:
`You sank all my battleships! You won!`

## Testing
Planning to use Jest testing

## Todo
1. User table input checks. Since input is not a must in requirement, didn't check the bad input
2. Unit tests, eslint, etc.
3. UI component storybook
4. Some error/warning fixes in the code, added TODO already
5. Add missed number limitation
6. Change to better UI
7. Add backend services, store and fetch data etc.
8. Add multiple players