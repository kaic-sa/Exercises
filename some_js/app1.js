const team = {
    _players: [{ firstName: 'k', lastName: 'a', age: '18' },
        { firstName: 'b', lastName: 'd', age: '20' },
        { firstName: 'c', lastName: 'f', age: '21' }
    ],

    _games: [{ opponent: 'a', teamPoints: 10, opponentPoints: 20 },
        { opponent: 'x', teamPoints: 8, opponentPoints: 5 },
        { opponent: 'c', teamPoints: 15, opponentPoints: 6 }
    ],

    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        this._players.push(newPlayer)
    },
    addGame(newOpponent, newTeamPoints, newOppponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOppponentPoints
        }
        this._games.push(game)
    }
}
team.addPlayer('Bugs', 'Bunny', 26)
console.log(team.players)
team.addGame('Titans', 100, 98)
console.log(team.games)