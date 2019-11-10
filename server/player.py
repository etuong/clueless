class Player:
    def __init__(self, player_name, character_name, room_hall):
        # Name of the player (user)
        self.player_name = player_name

        # Name of the character (suspect)
        self.character_name = character_name

        # Initial starting room hall
        self.room_hall = room_hall

        # Cards that are dealt to the player
        self.cards = list()

        # Boolean flag that states whether player has made an accusation
        self.made_accusation = False

        # Object that determines the immediate next player after this player
        self.next_player = None

    def move(self, room_or_hall):
        self.room_hall = room_or_hall
