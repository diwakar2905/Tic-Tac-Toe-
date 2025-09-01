# Tic Tac Toe Game

## Overview
This project is a web-based Tic Tac Toe game that allows two players to compete against each other. The game consists of a backend written in Python and a frontend built with HTML, CSS, and JavaScript.

## Project Structure
```
tic-tac-toe-app
├── public
│   ├── index.html
│   ├── style.css
│   └── app.js
├── src
│   ├── backend
│   │   └── tic_tac_toe.py
│   └── app.py
├── requirements.txt
├── vercel.json
└── README.md
```

## Backend
The backend logic is implemented in `src/backend/tic_tac_toe.py` and `src/app.py`. It includes:
- Game initialization
- Player symbol selection
- Game state management
- Winner determination
- A Flask server to handle game logic and serve the frontend.

## Frontend
The frontend consists of:
- `public/index.html`: The main HTML file that sets up the game board and user interface.
- `public/style.css`: Styles for the game interface, including layout and design.
- `public/app.js`: JavaScript code that handles user interactions and updates the game state.

## Requirements
To run the backend, you need to install the required Python packages listed in `requirements.txt`. You can install them using pip:

```
pip install -r requirements.txt
```

## Running the Game Locally
1. Start the backend server by running the `app.py` file.
2. Open `http://127.0.0.1:5000` in a web browser to access the game interface.
3. Follow the on-screen instructions to play the game.

## Deploying to Vercel
This project is configured for easy deployment to Vercel.

1.  **Push to GitHub:** Create a GitHub repository and push your code.
2.  **Connect to Vercel:**
    *   Go to your Vercel dashboard.
    *   Click on "New Project".
    *   Select your Git provider (GitHub).
    *   Choose your repository.
    *   Vercel will automatically detect the `vercel.json` file and configure the project.
    *   Click "Deploy".

## Contributing
Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are welcome!

## License
This project is open-source and available under the MIT License.
