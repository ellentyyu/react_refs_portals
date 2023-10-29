import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemained, setTimeRemained] = useState(targetTime * 1000);
    const isTimerActive = timeRemained < targetTime * 1000 && timeRemained > 0;

    if (timeRemained <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    const startChallengeHandler = () => {
        timer.current = setInterval(() => {
            setTimeRemained((prevTimeRemained) => prevTimeRemained - 10);
        }, 10);
    }

    const stopChallengeHandler = () => {
        clearInterval(timer.current);
        dialog.current.open();
    }

    const resetHandler = () => {
        setTimeRemained(targetTime * 1000);
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} timeRemained={timeRemained} onReset={resetHandler}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button type="button" onClick={isTimerActive ? stopChallengeHandler : startChallengeHandler}>
                        {isTimerActive ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={isTimerActive ? 'active' : null}>
                    {isTimerActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge