function App() {
    const [time, setTime] = React.useState("swaped")
    const [breakTime, setBreakTime] = React.useState(5)
    const [sessionTime, setSessionTime] = React.useState(25)
    const [play, setPlay] = React.useState(false)
    const [swap, setSwap] = React.useState(true)


    function decBr() {
        if (!play) {
            if (breakTime > 0) {
                setBreakTime(prev => prev - 1)
            }
        }

    }
    function incBr() {
        if (!play) {
            if (breakTime < 60) {
                setBreakTime(prev => prev + 1)
            }
        }
    }

    function decSe() {
        if (!play) {
            setSwap(true)
            if (sessionTime > 0) {
                setSessionTime(prev => prev - 1)

            }
        }
    }
    function incSe() {
        if (!play) {
            setSwap(true)
            if (sessionTime < 60) {
                setSessionTime(prev => prev + 1)
            }
        }
    }

    function handlePlay() {
        setPlay(prev => !prev)
        setSwap(false)
    }


    function handleReset() {
        setPlay(false)
        setBreakTime(5)
        setSessionTime(25)
        setSwap(true)
    }
    return (
        <div className="container">
            <div className="clock">
                <div className="title">25 + 5 Clock</div>
                <div className="controls">
                    <div className="break-section">
                        <div id="break-label">Break Length</div>
                        <div className="break-adj">
                            <div onClick={decBr} id="break-decrement"><i className="fas fa-arrow-alt-circle-down fa-lg"></i></div>
                            <div id="break-length">{breakTime}</div>
                            <div onClick={incBr} id="break-increment"><i className="fas fa-arrow-alt-circle-up fa-lg"></i></div>
                        </div>
                    </div>
                    <div className="session-section">
                        <div id="session-label">Session Length</div>
                        <div className="session-adj">
                            <div onClick={decSe} id="session-decrement"><i className="fas fa-arrow-alt-circle-down fa-lg"></i></div>
                            <div id="session-length">{sessionTime}</div>
                            <div onClick={incSe} id="session-increment"><i className="fas fa-arrow-alt-circle-up fa-lg"></i></div>
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <div id="timer-label">Session</div>
                    <div id="time-left">{swap ? sessionTime : time}</div>
                </div>
                <div className="start-reset">
                    <div onClick={handlePlay} id="start_stop">
                        {play ? <i className="fas fa-pause fa-lg"></i> : <i className="fas fa-play fa-lg"></i>}
                    </div>
                    <div onClick={handleReset} id="reset">
                        <i className="fas fa-redo fa-lg"></i>
                    </div>
                    <audio preload="auto" id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
                </div>
                <footer>
                    <p id="footer-title">Designed and Coded by</p>
                    <p id="author">dvsadovskyi</p>
                </footer>
            </div>
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)