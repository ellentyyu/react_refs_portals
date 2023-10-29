import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemained, setTimeRemained] = useState(targetTime * 1000);
    const isTimerActive = timeRemained < targetTime * 1000 && timeRemained > 0;

    if (timeRemained <= 0) {
        clearInterval(timer.current);
        setTimeRemained(targetTime * 1000);
        dialog.current.open();
    }

    const startChallengeHandler = () => {
        timer.current = setInterval(() => {
            setTimeRemained((prevTimeRemained) => prevTimeRemained - 10);
        }, 10);
    }

    const stopChallengeHandler = () => {
        console.log(timer.current, timeRemained);
        clearInterval(timer.current);
        setTimeRemained(targetTime * 1000);
        dialog.current.open();
    }
    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
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