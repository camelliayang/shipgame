export const PlayTurn = (target) => ({ type: PlayTurnActionType, payload: target })
export const StartGame = (message) => ({ type: StartGameActionType, payload: message })
export const RestartGame = (gameInfo) => ({ type: RestartGameActionType, payload: gameInfo })
export const SetMessage = (message) => ({ type: SetMessageActionType, payload: message })

export const PlayTurnActionType = 'PLAY_TURN'
export const StartGameActionType = 'START'
export const RestartGameActionType = 'RESTART'
export const SetMessageActionType = 'MESSAGE'

