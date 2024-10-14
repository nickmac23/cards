// command - your turn
// combat - can only be played when you are engaged in combat
// rapid - played at any time


const config = [
  {
    'amount': 1,
    'title': 'March',
    'type': 'command',
    'cost': {},
    'order': {
      'march': 1,
    },
  },
  {
    'amount': 1,
    'title': 'Forced March',
    'type': 'command',
    'cost': {},
    'order': {
      'march': 1,
      'action': 1,
      'description': 'Gain -2 Attack Power'
    },
  },
  {
    'amount': 1,
    'title': 'Attack',
    'type': 'command',
    'cost': {},
    'order': {
      'march': 1,
      'attack': 1
    },
  },
  {
    'amount': 1,
    'title': 'Double time',
    'type': 'command',
    'cost': {},
    'order': {
      'march': 2,
    },
  },
  {
    'amount': 1,
    'title': 'Rally',
    'type': 'rapid',
    'cost': {},
    'order': {
      'action': 1,
    },
  },
  {
    'amount': 1,
    'title': 'Gather',
    'type': 'command',
    'cost': {},
    'order': {
      'gather': 1,
    },
  },
  {
    'amount': 1,
    'title': 'Defend',
    'type': 'combat',
    'cost': {
    },
    'order': {
      'shield': 1,
    },
    'secondary': {
      'trigger': {
        "ore": 1,
      },
      "shield": 1,
    }
  },
  {
    'amount': 1,
    'title': 'Ambush',
    'type': 'command',
    'cost': {
      "mis": 1,
      "stone": 1,
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
  {
    'amount': 1,
    'title': 'Fortify',
    'type': 'combat',
    'cost': {
      'lumber': 1
    },
    'order': {
      'shield': 1,
    },
    'secondary': {
      'trigger': {
        "lumber": 'x',
      },
      "shield": 1,
      "description": "For every X lumber spent, gain X defence."
    }
  },
  {
    'amount': 1,
    'title': 'Intercept Order',
    'type': 'rapid',
    'cost': {
      'game': 1,
      'wheat': 1
    },
    'order': {
      'description': 'counter target rapid or combat'
    },
  },
  {
    'amount': 1,
    'title': 'Infiltrate',
    'type': 'command',
    'cost': {
      'game': 1,
      'wheat': 1
    },
    'order': {
      "march": 1,
      'description': "View target's hand and choose one card to discard"
    },
    'secondary': {
      'trigger': {
        "game": 1,
      },
      "action": 1,
    }
  },
  {
    'amount': 1,
    'title': 'Flank',
    'type': 'combat',
    'cost': {
      'game': 1,
      'wheat': 1
    },
    'order': {
      'description': "Engage troops you controll in an adjactent hex to the battle. Flanking troops do not move or retreat. Opponent chooses which units to apply casualies to. Flanking units become exhausted at end of combat."
    },
  },
  {
    'amount': 1,
    'title': 'Frienzied Charge',
    'type': 'command',
    'cost': {
      'game': 1,
      'wheat': 1
    },
    'order': {
      "march": 1,
      'description': "Force target hex to retreat by occupying it. No combat occures."
    },
  },
  {
    'amount': 1,
    'title': 'Tacticle Retreat',
    'type': 'combat',
    'cost': {
      'game': 1,
      'wheat': 1
    },
    'order': {
      'description': "Retreat troops. No combat occures."
    },
  },
  {
    'amount': 1,
    'title': 'War Cry',
    'type': 'combat',
    'cost': {
      'game': 1,
      'wheat': 1
    },
    'order': {
      'description': "After casualties, force opponent to retreat and gain controll of the contested hex."
    },
  },
  {
    'amount': 1,
    'title': 'Poision arrows',
    'type': 'command',
    'cost': {
      'game': 1,
      'wheat': 1
    },
    'order': {
      'march': 1,
      'casualty': 1,
      'march': 1,
      'description': "Casualty can only be applied when using a ranged only attack."
    },
  },
  {
    'amount': 1,
    'title': 'Watch Tower',
    'type': 'combat',
    'cost': {
      'game': 1,
      'wheat': 1
    },
    'order': {
      'description': "First strike",
    },
    'secondary': {
      'trigger': {
        "ore": 1,
      },
      "attack": 2,
    }
  },
  {
    'amount': 1,
    'title': 'Reposition',
    'type': 'rapid',
    'cost': {
      'game': 1,
      'wheat': 1
    },
    'order': {
      'march': 1,
      'description': 'no attacky'
    },
  },
]


export default config
