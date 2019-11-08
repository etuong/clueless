import numpy as np

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
