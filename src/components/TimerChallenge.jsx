
const TimerChallenge = ({title, targetTime}) => {
  return (
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button type="button">
                Start challenge
            </button>
        </p>
        <p>
            time is running...
        </p>
    </section>
  )
}

export default TimerChallenge