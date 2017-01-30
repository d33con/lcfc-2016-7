const fixtures = [
  {
    "code": "mufccs",
    "date": "Sun 7th Aug 2016",
    "venue": "Wembley Stadium",
    "opponent": "Manchester United",
    "competition": "FA Community Shield",
    "result": "L",
    "finalScore": "1-2",
    "attendance": "85,437",
    "referee": "Craig Pawson",
    "leicesterColour": "#2962ff",
    "opponentColour": "#d50000",
    "leicesterColourString": "blue",
    "opponentColourString": "red",
    "lscorers": [
      {
        "name": "Vardy",
        "time": 52
      }
    ],
    "oscorers": [
      {
        "name": "Lingard",
        "time": 32
      },
      {
        "name": "Ibrahimovic",
        "time": 83
      }
    ],
    "lteam": [1, 17, 6, 5, 28, 26, 4, 10, 11, 20, 9],
    "lsubs": [2, 22, 7, 15, 24, 23, 21],
    "oteam": [
      {"number": 1, "name" : "David De Gea"},
      {"number": 25, "name": "Antonio Valencia"},
      {"number": 3, "name": "Eric Bailly"},
      {"number": 17, "name": "Daley Blind"},
      {"number": 23, "name": "Luke Shaw"},
      {"number": 16, "name": "Michael Carrick"},
      {"number": 27, "name": "Marouane Fellaini"},
      {"number": 14, "name": "Jesse Lingard"},
      {"number": 10, "name": "Wayne Rooney"},
      {"number": 11, "name": "Anthony Martial"},
      {"number": 9, "name": "Zlatan Ibrahimovic", "replaced": "Mata"}
    ],
    "osubs": [
      {"number": 8, "name": "Juan Mata"},
      {"number": 28, "name": "Morgan Schneiderlin"},
      {"number": 19, "name": "Marcus Rashford"},
      {"number": 21, "name": "Ander Herrera"},
      {"number": 5, "name": "Marcus Rojo"},
      {"number": 22, "name": "Henrikh Mkhitaryan"},
      {"number": 20, "name": "Sergio Romero"}
    ],
    "lyellowcards": [17, 10, 9],
    "oyellowcards": [
      {"number": 3, "name": "Eric Bailly"}
    ],
    "possession": [
      {team : "Leicester City", value: 42, unit: "%"},
      {team: "Manchester United", value: 58, unit: "%"}
    ],
    "stats": [
      {"stat": "Shots", "Leicester City": 10, "opponent": 9},
      {"stat": "Shots On Target", "Leicester City": 2, "opponent": 9},
      {"stat": "Corners", "Leicester City": 7, "opponent": 2},
      {"stat": "Fouls", "Leicester City": 10, "opponent": 10}
    ]
  },
  {
    "code": "hcfca",
    "date": "Sat 13th Aug 2016",
    "venue": "K:COM Stadium",
    "opponent": "Hull City",
    "competition": "Premier League",
    "result": "L",
    "finalScore": "1-2",
    "attendance": "85,437",
    "lscorers": [
      {
        "name": "Vardy",
        "time": 52
      }
    ],
    "oscorers": [
      {
        "name": "Lingard",
        "time": 32
      },
      {
        "name": "Ibrahimovic",
        "time": 83
      }
    ],
    "lteam": [1, 17, 6, 5, 28, 26, 4, 10, 11, 20, 9],
    "lsubs": [2, 22, 7, 15, 24, 23, 21],
    "lyellowcards": [17, 10, 9],
    "possession": [{leicesterPossession: 42}, {opponentPossession: 58}]
  },
  {
    "code": "afch",
    "date": "Sat 20th Aug 2016",
    "venue": "King Power Stadium",
    "opponent": "Arsenal",
    "competition": "Premier League",
    "result": "D",
    "finalScore": "0-0",
    "attendance": "85,437",
    "lscorers": [],
    "oscorers": [],
    "lteam": [1, 17, 6, 5, 28, 26, 4, 10, 11, 20, 9],
    "lsubs": [2, 22, 7, 15, 24, 23, 21],
    "lyellowcards": [17, 10, 9],
    "possession": [42, 58]
  }
];

export default fixtures;
