
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

## Live Demo

You can play the game online here:  
**[https://tic-tac-toe-jv7o.onrender.com](https://tic-tac-toe-jv7o.onrender.com)**

***
<img width="1919" height="936" alt="Screenshot 2025-09-02 035938" src="https://github.com/user-attachments/assets/7d588e1a-28ca-4548-8be6-17ac212e1a01" />


<img width="1919" height="938" alt="Screenshot 2025-09-02 035955" src="https://github.com/user-attachments/assets/67dce824-e27d-4ea4-9878-ef59eb1c4d8a" />


***

## Deploying to Render

This project can be easily deployed to [Render](https://render.com).

1. **Push to GitHub:** Create a GitHub repository and push your code.
2. **Create a New Web Service on Render:**
    - Go to your Render dashboard.
    - Click "New" > "Web Service".
    - Connect your GitHub repository.
    - For the build and run commands, use:
        - **Build Command:** `pip install -r ../requirements.txt` (if your root directory is `src`)
        - **Start Command:** `gunicorn app:app`
    - Set the **Environment** to Python 3.x.
    - Optionally, set `PORT` environment variable to `5000` if needed.
3. **Deploy:** Click "Create Web Service" and Render will build and deploy your Flask app.
4. **Access:** Once deployed, you’ll get a public URL to access your Tic Tac Toe game.

**Note:**  
If your frontend is in the `public` folder and served by Flask, no extra configuration is needed.  
If you want to host the frontend separately (e.g., on Vercel or Netlify), update your frontend code to call the Render backend URL.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are welcome!

## License
This project is open-
