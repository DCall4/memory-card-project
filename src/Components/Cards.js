import React, {useState} from "react";
import uniqid from 'uniqid';

function Cards() {
    const [tracker, setTracker] = useState([]);
    const [highScore, setHighScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [cards, setCards] = useState([
            {
                id: uniqid(),
                name: 'Hamburger'
            },
            {
                id: uniqid(),
                name: 'Cheeseburger'
            },
            {
                id: uniqid(),
                name: 'Hotdog'
            },
            {
                id: uniqid(),
                name: 'Chili-Dog'
            },
            {
                id: uniqid(),
                name: 'Chicken-Sandwich'
            },
            {
                id: uniqid(),
                name: 'Wings'
            },
            {
                id: uniqid(),
                name: 'Fish-and-Chips'
            },
            {
                id: uniqid(),
                name: 'Fries'
            },
            {
                id: uniqid(),
                name: 'Reuben'
            },
            {
                id: uniqid(),
                name: 'Pizza'
            },
            {
                id: uniqid(),
                name: 'Tacos'
            },
            {
                id: uniqid(),
                name: 'Burrito'
            },
            {
                id: uniqid(),
                name: 'Quesadilla'
            },
            {
                id: uniqid(),
                name: 'Onion-Rings'
            },
            {
                id: uniqid(),
                name: 'Steak'
            },
            {
                id: uniqid(),
                name: 'Baked-Potato'
            },
    ]);

    function shuffleCards(array) {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    function handleClick(e) {
        const cardName = e.target.parentNode.lastChild.textContent;
        handleScore(cardName);
        setCards(shuffleCards(cards));
    }

    function handleScore(e) {
        if(tracker.includes(e)) {
            resetGame();
        } else {
            setTracker(tracker.concat(e));
            let score = currentScore + 1;
            if(score > highScore) {
                setHighScore(score);
            }
            setCurrentScore(score);
        }
    }

    function resetGame() {
        setTracker([]);
        setCurrentScore(0);
    }

    return (
        <div className="main">
            <div className="scoreboard">
                <div className="currentScore">
                    Current Score = {currentScore}
                </div>
                <div className="highScore">
                    High Score = {highScore}
                </div>
            </div>
            <div className="gameBoard">
                {cards.map(card => {
                    return (
                        <div className="card" onClick={handleClick}>
                            <div className="cardText">{card.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards