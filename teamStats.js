const team = {
    _players: [{
        firstName: 'Billy',
        lastname: 'Smith',
        age: 14
    }, {
        firstName: 'Johnny',
        lastName: 'Blaze',
        age: 12
    }, {
        firstName: 'Sammy',
        lastName: 'Horowitz',
        age: 13
    }],
    _games: [{
        opponent: 'Raiders',
        teamPoints: 42,
        opponentPoints: 46
    }, {
        opponent: 'Spartans',
        teamPoints: 37,
        opponentPoints: 36
    }, {
        opponent: 'Celtics',
        teamPoints: 45,
        opponentPoints: 45
    }],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age
        }
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints
        }
        this.games.push(game);
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Oilers', 44, 63);
team.addGame('Titans', 77, 76);
team.addGame('Ducks', 55, 45);

console.log(team.players);
console.log(team.games);