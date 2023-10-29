import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(({ targetTime, timeRemained, onReset }, ref) => {
    const dialogModal = useRef();

    const isLost = timeRemained <= 0;
    const formattedTimeRemained = (timeRemained / 1000).toFixed(2);
    const score = Math.round((1 - timeRemained / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogModal.current.showModal();
            },
        };
    });
    return (
        <dialog ref={dialogModal} className="result-modal" onClose={onReset}>
            {isLost && <h2>You lost!</h2>}
            {!isLost && <h2>Your Score: {score}</h2>}
            <p>
                your target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                you stopped the timer with <strong>{formattedTimeRemained} seconds left.</strong>
            </p>
            <form method="dialog">
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
