class Player:
    def __init__(self, player_name, character_name, room_hall):
        self.player_name = player_name
        self.character_name = character_name       
        self.room_hall = room_hall
        self.cards = list()
        self.made_accusation = False
        self.next_player = None

    def move(self, room_or_hall):
        self.room_hall = room_or_hall
