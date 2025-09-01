from flask import Flask, jsonify, request, send_from_directory
from tic_tac_toe import initialize_game, make_move, is_winner, is_full
import os

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), '..', 'public'))

board = initialize_game()
current_player = 'X'

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

@app.route('/api/game', methods=['GET'])
def game_state():
    return jsonify({
        'board': board,
        'currentPlayer': current_player
    })

@app.route('/move', methods=['POST'])
def move():
    global current_player
    data = request.get_json()
    row, col = data['row'], data['col']

    if make_move(board, row, col, current_player):
        if is_winner(board, current_player):
            return jsonify({
                'board': board,
                'winner': current_player
            })
        if is_full(board):
            return jsonify({
                'board': board,
                'winner': 'tie'
            })
        current_player = 'O' if current_player == 'X' else 'X'
        return jsonify({
            'board': board,
            'currentPlayer': current_player
        })
    return jsonify({'error': 'Invalid move'}), 400

@app.route('/api/restart', methods=['POST'])
def restart():
    global board, current_player
    board = initialize_game()
    current_player = 'X'
    return jsonify({
        'board': board,
        'currentPlayer': current_player
    })

if __name__ == '__main__':
    app.run(debug=True)
