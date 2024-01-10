import './StartGame.css';
function StartGame({ toggle }) {
    return (
        <div className="Container">
            <div><img src="/images/dices.png"/></div>
            <div>
                <h1>Dice Game</h1>
                <button onClick={toggle}>Play Now</button>
            </div>
        </div>
    );
}

export default StartGame;




