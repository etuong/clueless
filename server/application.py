from flask import Flask, request, jsonify
from flask_restful import Api, Resource, reqparse
import game

# EB looks for an 'application' callable by default.
application = Flask(__name__)
api = Api(application)

game = game.CluelessGame()

class GameApi(Resource):
    def get(self, name):
        return {'Hello': name}

class PlayerApi(Resource):

    def get(self, player_name):
        player = game.players.get(player_name)
        player_info = dict(name=player.player_name, character_name=player.character_name,
                            room_hall=player.room_hall, room_location=player.room_location)
        return player_info

    def post(self, player_name):
        parser = reqparse.RequestParser()
        parser.add_argument('character_name', type=str)
        args = parser.parse_args()
        player = game.create_player(player_name, args.get('character_name'))
        player_info = dict(name=player.player_name, character_name=player.character_name,
                            room_hall=player.room_hall, room_location=player.room_location)
        return player_info

class PlayersApi(Resource):
    def get(self):
        response = dict()

        for name, player in game.players.items():
            response[name] = vars(player)
        return response

api.add_resource(PlayerApi, '/api/player/<player_name>')
api.add_resource(PlayersApi, '/api/players')

if __name__ == "__main__":
    application.debug = True
    application.run()
