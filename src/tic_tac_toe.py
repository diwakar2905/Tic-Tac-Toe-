def initialize_game():
    """Creates a blank playboard."""
    return [[" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]]

def make_move(board, row, col, player):
    """Locates player's symbol on the board if the spot is empty."""
    if board[row][col] == " ":
        board[row][col] = player
        return True
    return False

def is_winner(board, symbol):
    """Checks if any winner is winning."""
    # Check the rows
    for row in range(3):
        if board[row][0] == board[row][1] == board[row][2] == symbol:
            return True

    # Check the columns
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] == symbol:
            return True

    # Check the diagonals
    if board[0][0] == board[1][1] == board[2][2] == symbol:
        return True
    if board[0][2] == board[1][1] == board[2][0] == symbol:
        return True

    return False

def is_full(board):
    """This function checks if the board is full."""
    for row in board:
        for cell in row:
            if cell == " ":
                return False
    return True