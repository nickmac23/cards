// Resources
//     1. gold (wheat)
//         - income
//         - army
//         - provision
//     2. wood
//         - mobility
//         - ranged attacks
//     3. stone
//         - defence 
//     4. iron (ore)
//         - attack

const provisionCards = [
  {
    'amount': 4,
    'title': 'Forage the Land',
    'type': 'provision',
    'cost': {},
    'order': {
      'gather': 1,
    },
    "income": 1
  },
  {
    'amount': 2,
    'title': 'Stockpile Reserves',
    'type': 'provision',
    'cost': {},
    'order': {
      'gather': 1,
    },
    'secondary': {
      'trigger': {
        "wheat": 1,
      },
      'description': 'gain any one additoinal resource'
    }
  },
  {
    'amount': 2,
    'title': 'Fortify Position',
    'type': 'provision',
    'cost': {},
    'order': {
      'gather': 1,
    },
    'secondary': {
      'trigger': {
        "stone": 1,
      },
      'shield': 1
    }
  },
  {
    'amount': 2,
    'title': 'Ready arms',
    'type': 'provision',
    'cost': {},
    'order': {
      'gather': 1,
    },
    'secondary': {
      'trigger': {
        "ore": 1,
      },
      'attack': 1
    },
    'income': 1
  },
  {
    'amount': 2,
    'title': 'Enlist',
    'type': 'provision',
    'cost': {},
    'order': {
      'gather': 1,
    },
    'secondary': {
      'trigger': {
        "wheat": 1,
      },
      'description': 'deploy a new unit to this hex'
    }
  },
]

const commandCards = [
  {
    'amount': 4,
    'title': 'Attack',
    'type': 'command',
    'cost': {},
    'order': {
      'attack': 1,
    },
  },
  {
    'amount': 2,
    'title': 'Sheild Wall',
    'type': 'command',
    'cost': {},
    'order': {
      'attack': 1,
    },
    'secondary': {
      'trigger': {
        "stone": 1,
      },
      'shield': 1
    }
  },
  {
    'amount': 2,
    'title': 'Raid',
    'type': 'command',
    'cost': {},
    'order': {
      'attack': 1,
    },
    'secondary': {
      'trigger': {
        "wheat": 1,
      },
      'description': 'Steal an opponents resource. Must be resolved pre combat. (distance 1)'
    }
  },
  {
    'amount': 2,
    'title': 'Charge!',
    'type': 'command',
    'cost': {},
    'order': {
      'attack': 1,
    },
    'secondary': {
      'trigger': {
        "ore": 1,
      },
      'attack': 1
    }
  },
  {
    'amount': 2,
    'title': 'Loose!',
    'type': 'command',
    'cost': {},
    'order': {
      'attack': 1,
    },
    'secondary': {
      'trigger': {
        "lumber": 1,
      },
      'description': 'range attack from +1 distance'
    },
    'income': 1
  },
]

const tacticCards = [
  {
    'amount': 4,
    'title': 'Reposistion',
    'type': 'tactic',
    'cost': {},
    'order': {
      'description': 'Move units from adjecent hexes to target hex',
    },
  },
  {
    'amount': 4,
    'title': 'Loose!',
    'type': 'tactic',
    'cost': {},
    'order': {
      'attack': 1,
      'description': 'range attack only, cannot move units'
    },
  },
  {
    'amount': 2,
    'title': 'Bolster Army',
    'type': 'tactic',
    'cost': {},
    'order': {
      'description': 'Deploy a unit for free'
    },
  },
  {
    'amount': 2,
    'title': 'Sabotage',
    'type': 'stratagem',
    'cost': {},
    'order': {
      'description': 'Look through you opponents hand. (distance 1)'
    },
    'secondary': {
      'trigger': {
        "lumber": 1,
      },
      'description': 'discard 1 of your opponents card.'
    }
  },
  {
    'amount': 2,
    'title': 'Scout',
    'type': 'stratagem',
    'cost': {},
    'order': {
      'description': 'Gain +1 defence'
    },
    'income': 2
  },
  {
    'amount': 2,
    'title': 'Tatical retreat',
    'type': 'stratagem',
    'cost': {},
    'order': {
      'description': 'Retreat units, resolves precombat.'
    },
    'income': 2
  },
]


export default [...provisionCards, ...commandCards, ...tacticCards]
