// Resources
//     1. gold (wheat)
//         - income
//         - army
//         - harvest
//     2. wood
//         - mobility
//         - ranged attacks
//     3. stone
//         - defence 
//     4. iron (ore)
//         - attack

const harvestCards = [
  {
    'amount': 1,
    'title': 'Forage the Land',
    'type': 'harvest',
    'cost': {},
    'order': {
      'gather': 1,
    },
  },
  {
    'amount': 1,
    'title': 'Stockpile Reserves',
    'type': 'harvest',
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
    'amount': 1,
    'title': 'Fortify Position',
    'type': 'harvest',
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
    'amount': 1,
    'title': 'Ready arms',
    'type': 'harvest',
    'cost': {},
    'order': {
      'gather': 1,
    },
    'secondary': {
      'trigger': {
        "ore": 1,
      },
      'attack': 1
    }
  },
  {
    'amount': 1,
    'title': 'Enlist',
    'type': 'harvest',
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

const attackCards = [
  {
    'amount': 1,
    'title': 'Sheild Wall',
    'type': 'attack',
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
    'amount': 1,
    'title': 'Raid',
    'type': 'attack',
    'cost': {},
    'order': {
      'attack': 1,
    },
    'secondary': {
      'trigger': {
        "wheat": 1,
      },
      'description': 'Steal any resource from a player who has units in an adjecent hex. Must be resolved pre combat.'
    }
  },
  {
    'amount': 1,
    'title': 'Charge!',
    'type': 'attack',
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
    'amount': 1,
    'title': 'Loose!',
    'type': 'attack',
    'cost': {},
    'order': {
      'attack': 1,
    },
    'secondary': {
      'trigger': {
        "lumber": 1,
      },
      'description': 'range attack from +1 distance'
    }
  },
]

const bonusCards = [
  {
    'amount': 1,
    'title': 'Reposistion',
    'type': 'bonus',
    'cost': {},
    'order': {
      'description': 'Move units from adjecent hexes to target hex',
    },
  },
  {
    'amount': 1,
    'title': 'Loose!',
    'type': 'bonus',
    'cost': {},
    'order': {
      'attack': 1,
      'description': 'range attack only, cannot move units'
    },
  },
  {
    'amount': 1,
    'title': 'Bolster Army',
    'type': 'bonus',
    'cost': {},
    'order': {
      'description': 'Deploy a unit for free'
    },
  },
]


export default [...harvestCards, ...attackCards, ...bonusCards]
