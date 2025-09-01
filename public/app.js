document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const statusDiv = document.getElementById('status');
    const restartButton = document.getElementById('restart-button');
    const celebrationDiv = document.getElementById('celebration');
    const body = document.body;

    let currentPlayer = 'X';

    const updateBoard = (board) => {
        board.flat().forEach((cell, index) => {
            cells[index].textContent = cell;
        });
    };

    const fetchGameState = () => {
        fetch('/api/game')
            .then(response => response.json())
            .then(data => {
                updateBoard(data.board);
                currentPlayer = data.currentPlayer;
                statusDiv.textContent = `Player ${currentPlayer}'s turn`;
            });
    };

    const showCelebration = () => {
        body.classList.add('show-celebration');
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            body.appendChild(confetti);
        }
    };

    const hideCelebration = () => {
        body.classList.remove('show-celebration');
        const confetti = document.querySelectorAll('.confetti');
        confetti.forEach(c => c.remove());
    };

    const handleCellClick = (row, col) => {
        hideCelebration();
        fetch('/move', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ row, col })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                    return;
                }
                updateBoard(data.board);
                if (data.winner) {
                    if (data.winner === 'tie') {
                        statusDiv.textContent = "It's a tie!";
                    } else {
                        statusDiv.textContent = `Player ${data.winner} wins!`;
                        showCelebration();
                    }
                } else {
                    currentPlayer = data.currentPlayer;
                    statusDiv.textContent = `Player ${currentPlayer}'s turn`;
                }
            });
    };

    const restartGame = () => {
        hideCelebration();
        fetch('/api/restart', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                updateBoard(data.board);
                currentPlayer = data.currentPlayer;
                statusDiv.textContent = `Player ${currentPlayer}'s turn`;
            });
    };

    cells.forEach((cell, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        cell.addEventListener('click', () => handleCellClick(row, col));
    });

    restartButton.addEventListener('click', restartGame);

    fetchGameState();
});