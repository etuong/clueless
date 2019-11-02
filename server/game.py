import numpy as np
import random

# Indicates whether hallway is free
HALLWAY_STATE = {
    'study-hall': True,
    'study-library': True,
    'hall-lounge': True,
    'hall-billiard room': True,
    'lounge-dining room': True,
    'library-billiard room': True,
    'library-conservatory': True,
    'billiard room-dining room': True,
    'billiard room-ballroom': True,
    'dining room-kitchen': True,
    'conservatory-ballroom': True,
    'ballroom-kitchen': True
}

INITIAL_PLAYER_LOCATIONS = {
    'miss scarlet': 'hall-lounge',
    'professor plum': 'study-library',
    'colonel mustard': 'lounge-dining room',
    'mrs peacock': 'library-conservatory',
    'mr green': 'conservatory-ballroom',
    'mrs white': 'ballroom-kitchen'
}

ROOMS = [
    'study',
    'hall',
    'library',
    'billiard room',
    'lounge',
    'dining room',
    'library',
    'conservatory',
    'ballroom',
    'kitchen'
]

WEAPONS = [
    'pipe',
    'knife',
    'wrench',
    'rope',
    'pistol',
    'candlestick'
]


class CluelessGame:
    def __init__(self):
        self.rooms = dict()
        self.rooms['study'] = Room('study', 'kitchen', ['study-library', 'study-hall'])
        self.rooms['hall'] = Room('hall', None, ['hall-billiard room', 'hall-lounge', 'study-hall'])
        self.rooms['lounge'] = Room('lounge', 'conservatory', ['lounge-dining room', 'hall-lounge'])
        self.rooms['library'] = Room('library', None, ['study-library', 'library-conservatory', 'library-billiard room'])
        self.rooms['billiard room'] = Room('billiard room', None,
                                           ['hall-billiard room', 'billiard room-ballroom', 'library-billiard room', 'billiard room-dining room'])
        self.rooms['dining room'] = Room('dining room', None, ['lounge-dining room', 'dining room-kitchen', 'billiard room-diningroom'])
        self.rooms['conservatory'] = Room('conservatory', 'lounge', ['library-conservatory', 'conservatory-ballroom'])
        self.rooms['ballroom'] = Room('ballroom', None, ['billiard room-ballroom', 'conservatory-ballroom', 'ballroom-kitchen'])
        self.rooms['kitchen'] = Room('kitchen', 'study', ['dining room-kitchen', 'ballroom-kitchen']) 

        self.hallways = HALLWAY_STATE
        self.players = dict()

        self.game_answer = self.create_game_answer()


    def create_game_answer(self):
        character = random.choice([*INITIAL_PLAYER_LOCATIONS.keys()])
        room = random.choice(ROOMS)
        weapon = random.choice(WEAPONS)

        return (character, room, weapon)

    def create_player(self, player_name, character_name):
        self.players[player_name] = Player(player_name, character_name, 
                                            INITIAL_PLAYER_LOCATIONS.get(character_name))
        return self.players[player_name]


class Room:
    def __init__(self, name, secret_passage_connection, hallways):
        self.name = name
        self.space = np.zeros((3,3))
        self.secret_passage_connection = secret_passage_connection
        self.hallways = hallways

    def get_move_options(self):
        move_options = [*self.hallways]
        
        if self.secret_passage_connection:
            move_options.append(self.secret_passage_connection)

        return dict(options=move_options)
  
class Player:
    def __init__(self, player_name, character_name, room_hall):
        self.player_name = player_name
        self.character_name = character_name       
        self.room_hall = room_hall

    def move(self, room_or_hall):
        self.room_hall = room_or_hall
