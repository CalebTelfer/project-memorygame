function Header({score}) {
    return (
        <>
            <div className="flex-col flex-cen">
                <h1>Pokemon Memory Game</h1>
                <h3>Click every card only once! Click the same card and you'll lose!</h3>

                <div className="flex gap6">
                    <div className="flex gap1">
                        <h3>Score:</h3>
                        <h3 className="score">0</h3>
                    </div>

                    <div className="flex gap1">
                        <h3>High Score: </h3>
                        <h3 className="highscore">0</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header