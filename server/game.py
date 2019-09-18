import numpy as np

# Indicates whether hallway is occupied
INITIAL_HALLWAY_STATE = {
    'study-hall': False,
    'study-library': False,
    'hall-lounge': False,
    'hall-billiard': False,
    'lounge-dining': False,
    'library-billiard': False,
    'library-conservatory': False,
    'billiard-dining': False,
    'billiard-ball': False,
    'dining-kitchen': False,
    'conservatory-ball': False,
    'ball-kitchen': False
}

INITIAL_PLAYER_LOCATIONS = {
    'miss scarlet': 'hall-lounge',
    'professor plum': 'study-library',
    'colonel mustard': 'lounge-dining',
    'mrs peacock': 'library-conservatory',
    'mr green': 'conservatory-ball',
    'mrs white': 'ball-kitchen'
}


class CluelessGame:
    def __init__(self):
        self.rooms = dict()
        self.rooms['study'] = Room('study', (2,2), 'kitchen')
        self.rooms['hall'] = Room('hall', None, None)
        self.rooms['lounge'] = Room('lounge', (2,0), 'conservatory')
        self.rooms['library'] = Room('library', None, None)
        self.rooms['billiard room'] = Room('billiard room', None, None)
        self.rooms['dining room'] = Room('dining room', None, None)
        self.rooms['conservatory'] = Room('conservatory', (0,2), 'lounge')
        self.rooms['ballroom'] = Room('ballroom', None, None)
        self.rooms['kitchen'] = Room('kitchen', (0,0), 'study')   

        self.hallways = INITIAL_HALLWAY_STATE
        self.players = dict()

    def create_player(self, player_name, character_name):
        self.players[player_name] = Player(player_name, character_name, 
                                            INITIAL_PLAYER_LOCATIONS.get(character_name), None)
        return self.players[player_name]


class Room:
    def __init__(self, name, secret_passage_location, secret_passage_connection):
        self.name = name
        self.space = np.zeros((3,3))
        self.secret_passage_location = secret_passage_location
        self.secret_passage_connection = secret_passage_connection


class Player:
    def __init__(self, player_name, character_name, room_hall, room_location):
        self.player_name = player_name
        self.character_name = character_name       
        self.room_hall = room_hall
        self.room_location = room_location
