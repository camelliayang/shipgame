# React Battle ship Challenge
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirement and explanation
- [ ] Managing multiple players
- [x] Reading user input (Did a simple table one)
- [x] Playing a game(Sorry already did it in order to test) 

An attack should result in the new state of the board along with one of the following outcomes:
- [x] ʻHitʼ if there is a ship occupying the position
- [x] ʻMissʼ if no ship occupies the position---Can add a limit for missed times
- [ ] ʻAlready Attackedʼ if the position has previously been attacked ---Can add this in the state also but I'm using a table to check it, not useful right now.
- [x] ʻSunkʼ if the attack hits the last remaining position of a ship 
- [ ] ʻWinʼ if the attack sinks the last remaining ship---Have this message and can be extended when we have multiple players

(Using react hooks and redux to manage states. Just want to practice using this way rather than class component and setStates)

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
Planning to use Jest testing but the time is up.

## Todo
1. User table input checks. Since input is not a must in requirement, didn't check the bad input
2. Unit tests, eslint, etc.
3. UI component storybook
4. Some error/warning fixes in the code, added TODO already
5. Add missed number limitation
6. Change to better UI
7. Add backend services, store and fetch data etc.