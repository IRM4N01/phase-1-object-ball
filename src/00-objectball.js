function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black", "white"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["turquise", "purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        } 
    }
}

function numPointsScored(playerName) {
    const game = gameObject();

    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;

        if (players[playerName]) {
            return players[playerName].points;
        }
    }

    return null;
}

function shoeSize(playerName) {
    const game = gameObject ();

    for (let teamKey in game) {
        const players = game[teamKey].players;

        if (players[playerName]) {
            return players[playerName].shoe;
        }
    }

    return null;
}

function teamColors(teamName) {
  const game = gameObject();

  for (let teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) {
        return team.colors;
    }
  }

  return null;
}

function teamNames() {
    const game = gameObject();
    const names = [];

    for (let teamKey in game) {
        names.push(game[teamKey].teamName);
    }

    return names;
}

function playersNumbers(teamName) {
    const game = gameObject();

    for (let teamKey in game) {
        const team = game[teamKey];

        if (team.teamName === teamName) {
            const numbers = [];

            for (let player in team.players) {
                numbers.push(team.players[player].number);
            }

            return numbers;
        }
    }

    return null;
}

function playerStats(playerName) {
    const game = gameObject();

    for (let teamKey in game) {
        const players = game[teamKey].players;

        if (players[playerName]) {
          return players[playerName];
        }
    }

    return null;
}

function bigShoeRebounds() {
    const game = gameObject();

    let biggestShoe = 0;
    let rebounds = 0;

    for (let teamKey in game) {
        const players = game[teamKey].players;

        for (let player in players) {
          const shoe = players[player].shoe;

          if (shoe > biggestShoe) {
            biggestShoe = shoe;
            rebounds = players[player].rebounds;
          }
        }
    }

    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();

    let maxPoints = 0;
    let topPlayer = "";

    for (let teamKey in game) {
        const players = game[teamKey].players;

        for (let player in players) {
            if (players[player].points > maxPoints) {
                maxPoints = players[player].points;
                topPlayer = player;
            }
        }
    }

    return topPlayer;
}

function winningTeam() {
    const game = gameObject();

    let teamScores = {};

    for (let teamKey in game) {
        const team = game[teamKey];
        let totalPoints = 0;

        for (let player in team.players) {
            totalPoints += team.players[player].points;
         }

          teamScores[team.teamName] = totalPoints;
    }

    const winner = Object.keys(teamScores).reduce((a, b) => teamScores[a] > teamScores[b] ? a : b);

    return winner;
}

function playerWithLongestName() {
    const game = gameObject();

    let longestName = "";

    for (let teamKey in game) {
        const players = game[teamKey].players;

        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }

    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();

    let longestNamePlayer = "";
    let maxSteals = 0;
    let topStealer = "";

    for (let teamKey in game) {
        const players = game[teamKey].players;

        for (let player in players) {
            if (player.length > longestNamePlayer.length) {
                longestNamePlayer = player;
            }

            if (players[player].steals > maxSteals) {
                maxSteals = players[player].steals;
                topStealer = player;
            }
        }
    }

    return longestNamePlayer === topStealer;
}




