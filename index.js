function App() {
    return (
        <div className="container">
            <div className="clock">
                <div className="title">25 + 5 Clock</div>
                <div className="controls">
                    <div className="break-section">
                        <div id="break-label">Break Length</div>
                        <div className="break-adj">
                            <i id="break-decrement">down</i>
                            <div id="break-length">break time</div>
                            <i id="break-increment">up</i>
                        </div>
                    </div>
                    <div className="session-section">
                        <div id="session-label">Session Length</div>
                        <div className="session-adj">
                            <i id="session-decrement">down</i>
                            <div id="session-length">session time</div>
                            <i id="session-increment">up</i>
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <div id="timer-label">Session</div>
                    <div id="time-left">time</div>
                </div>
                <div className="start-reset">
                    <i id="start_stop">start-pause</i>
                    <i id="reset">reset</i>
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