import { useState, useRef } from "react";

const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    

    const startChallengeHandler = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        console.log('set', timer.current);
        setTimerStarted(true);
    }

    const stopChallengeHandler = () => {
        console.log('clear', timer.current);
        clearTimeout(timer.current);
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button type="button" onClick={timerStarted ? stopChallengeHandler : startChallengeHandler}>
                    {timerStarted ? 'Stop' : 'Start'} challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : null}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    )
}

export default TimerChallenge