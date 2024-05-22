const config = [
  {
    'amount': 1,
    'title': 'March',
    'cost': {},
    'order': {
      'march': 1,
    },
  },
  {
    'amount': 1,
    'title': 'Ambush',
    'cost': {
      "mis": 1,
      "ore": 1,
      "lumber": 1,
    },
    'order': {
      'march': 1,
    },
    'secondary': {
      'trigger': {
        "lumber": 1,
      },
      "attack": 1,
      'description': 'first strike'
    }
  },
]


export default config
