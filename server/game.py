import numpy as np
import random
from player import Player
from room import Room
from collections import OrderedDict

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
    'miss_scarlet': 'hall-lounge',
    'professor_plum': 'study-library',
    'colonel_mustard': 'lounge-dining room',
    'mrs_peacock': 'library-conservatory',
    'mr_green': 'conservatory-ballroom',
    'mrs_white': 'ballroom-kitchen'
}

ROOMS = [
    'study',
    'library',
    'billiard',
    'lounge',
    'dining',
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
    'revolver',
    'candlestick'
]

CHARACTERS = [
    'miss_scarlet',
    'professor_plum',
    'colonel_mustard',
    'mrs_peacock',
    'mr_green',
    'mrs_white'
]


class CluelessGame:
    def __init__(self):
        # Initialize the rooms
        self.rooms = dict()
        self.rooms['study'] = Room('study', 'kitchen', ['study-library', 'study-hall'])
        self.rooms['hall'] = Room('hall', None, ['hall-billiard room', 'hall-lounge', 'study-hall'])
        self.rooms['lounge'] = Room('lounge', 'conservatory', ['lounge-dining room', 'hall-lounge'])
        self.rooms['library'] = Room('library', None, ['study-library', 'library-conservatory', 
                                     'library-billiard room'])
        self.rooms['billiard room'] = Room('billiard room', None,
                                           ['hall-billiard room', 'billiard room-ballroom', 'library-billiard room', 
                                           'billiard room-dining room'])
        self.rooms['dining room'] = Room('dining room', None, ['lounge-dining room', 'dining room-kitchen',
                                         'billiard room-diningroom'])
        self.rooms['conservatory'] = Room('conservatory', 'lounge', ['library-conservatory', 'conservatory-ballroom'])
        self.rooms['ballroom'] = Room('ballroom', None, ['billiard room-ballroom', 'conservatory-ballroom',
                                      'ballroom-kitchen'])
        self.rooms['kitchen'] = Room('kitchen', 'study', ['dining room-kitchen', 'ballroom-kitchen']) 

        self.hallways = HALLWAY_STATE

        # Player dictionary -> key: player name, value: player properties
        # Using an ordered dict to preserve ordering of player registration
        self.players = OrderedDict()

        self.game_answer = self.create_game_answer()
        self.current_player_index = 0
        self.game_started = False


    def create_game_answer(self):
        character = random.choice(CHARACTERS)
        room = random.choice(ROOMS)
        weapon = random.choice(WEAPONS)

        WEAPONS.remove(weapon)
        CHARACTERS.remove(character)
        ROOMS.remove(room)

        return (character, room, weapon)


    # Create a new player and assign an initial starting position on the board
    def create_player(self, player_name, character_name):
        self.players[player_name] = Player(player_name, character_name, 
                                            INITIAL_PLAYER_LOCATIONS.get(character_name))
        return self.players[player_name]


    # Algorithm to distribute random cards to the players
    def distribute_cards(self):
        # Get all the cards
        cards = ROOMS + WEAPONS + CHARACTERS
        current_player_index = 0

        while len(cards) != 0:
            if current_player_index > (len(self.players) - 1):
                current_player_index = 0

            # Get the current player
            current_player = [*self.players.keys()][current_player_index]

            # Get a random card and remove from deck
            random_card = random.choice(cards)
            cards.remove(random_card)

            # Append new card to player hand
            self.players.get(current_player).cards.append(random_card)

            # Move on to the next player
            current_player_index += 1
        self.game_started = True
