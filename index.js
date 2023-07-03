function App() {
    return (
        <div className="container">
            <div className="clock">
                <div className="title">25 + 5 Clock</div>
                <div className="controls">
                    <div className="break-section">
                        <div id="break-label">Break Length</div>
                        <div className="break-adj">
                            <div id="break-decrement"><i className="fas fa-arrow-alt-circle-down fa-lg"></i></div>
                            <div id="break-length">5</div>
                            <div id="break-increment"><i className="fas fa-arrow-alt-circle-up fa-lg"></i></div>
                        </div>
                    </div>
                    <div className="session-section">
                        <div id="session-label">Session Length</div>
                        <div className="session-adj">
                            <div id="session-decrement"><i className="fas fa-arrow-alt-circle-down fa-lg"></i></div>
                            <div id="session-length">25</div>
                            <div id="session-increment"><i className="fas fa-arrow-alt-circle-up fa-lg"></i></div>
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <div id="timer-label">Session</div>
                    <div id="time-left">60</div>
                </div>
                <div className="start-reset">
                    <div id="start_stop">
                        <i className="fas fa-play fa-lg"></i>
                        <i className="fas fa-pause fa-lg"></i>
                    </div>
                    <div id="reset">
                        <i className="fas fa-redo fa-lg"></i>
                    </div>
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