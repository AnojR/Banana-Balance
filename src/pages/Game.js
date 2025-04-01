import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState("");
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [score, setScore] = useState(0);
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetchQuestion();
        fetchLeaderboard();
    }, []);

    const fetchQuestion = async () => {
        const response = await axios.get("http://localhost:5000/api/question");
        setQuestion(response.data);
    };

    const fetchLeaderboard = async () => {
        const response = await axios.get("http://localhost:5000/api/leaderboard");
        setLeaderboard(response.data);
    };

    const checkAnswer = () => {
        if (parseInt(answer) === question.solution) {
            setMessage("Correct!");
            setScore(score + 1);
        } else {
            setMessage("Wrong! Try again.");
        }
        setAnswer("");
        fetchQuestion();
    };

    const saveScore = async () => {
        await axios.post("http://localhost:5000/api/score", { username, score });
        fetchLeaderboard();
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Banana Game 🍌</h1>

            {question && (
                <div>
                    <img src={question.question} alt="Banana Quiz" style={{ width: "200px" }} />
                    <br />
                    <input type="number" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                    <button onClick={checkAnswer}>Submit</button>
                    <p>{message}</p>
                </div>
            )}

            <h2>Leaderboard 🏆</h2>
            <ul>
                {leaderboard.map((user, index) => (
                    <li key={index}>{user.username}: {user.score}</li>
                ))}
            </ul>

            <h3>Save Your Score</h3>
            <input type="text" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={saveScore}>Save Score</button>
        </div>
    );
}

export default App;