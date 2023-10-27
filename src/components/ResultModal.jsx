import { forwardRef } from "react";
const ResultModal = forwardRef(({result, targetTime}, ref) => {
    return (
        <dialog ref={ref} className="result-modal">
            <h2>You {result}!</h2>
            <p>your target time was <strong>{targetTime} seconds.</strong></p>
            <p>you stopped the timer with <strong>x seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
});

export default ResultModal