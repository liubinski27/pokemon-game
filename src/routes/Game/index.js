const GamePage = ({onChangePage}) => {

    const handleClick = () => {
        console.log('####: <GamePage />');
        onChangePage && onChangePage('app');
    }

    return (
        <div>
            This is Game Page!
            <button onClick={handleClick}>Back to Home</button>
        </div>
    )
}

export default GamePage;