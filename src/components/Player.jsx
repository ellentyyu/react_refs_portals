import { useState, useRef } from "react";

export default function Player() {
    const [playerName, setPlayerName] = useState(null);
    const nameInput = useRef();
    const setNameHandler = () => {
        setPlayerName(nameInput.current.value);
        nameInput.current.value = '';
    }

    return (
        <section id="player">
        <h2>Welcome {playerName ?? 'unknown entity'}</h2>
        <p>
            <input ref={nameInput} type="text" />
            <button onClick={setNameHandler}>Set Name</button>
        </p>
        </section>
    );
}
