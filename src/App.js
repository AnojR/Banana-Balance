import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepg from "./pages/Homepg";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GameMenu from "./pages/Game Menu";
import About from "./pages/About";
import Game from "./pages/Game";
import Score from "./pages/Score";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gamemenu" element={<GameMenu />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </Router>
  );
}

export default App;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const App = () => {
// //   const [equation, setEquation] = useState("");
// //   const [answer, setAnswer] = useState(null);
// //   const [userInput, setUserInput] = useState("");
// //   const [message, setMessage] = useState("");

// //   useEffect(() => {
// //     fetchEquation();
// //   }, []);

// //   const fetchEquation = async () => {
// //     try {
// //       const response = await axios.get("http://127.0.0.1:8000/generate-equation");
// //       setEquation(response.data.equation);
// //       setAnswer(response.data.answer);
// //     } catch (error) {
// //       console.error("Error fetching equation:", error);
// //     }
// //   };

// //   const checkAnswer = () => {
// //     if (parseInt(userInput) === answer) {
// //       setMessage("✅ Correct!");
// //     } else {
// //       setMessage("❌ Try Again!");
// //     }
// //   };

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "50px" }}>
// //       <h1>The Banana Game 🍌</h1>
// //       <h2>{equation.replace("?", "🍌")}</h2>
// //       <input
// //         type="number"
// //         placeholder="Enter missing number"
// //         value={userInput}
// //         onChange={(e) => setUserInput(e.target.value)}
// //       />
// //       <button onClick={checkAnswer}>Submit</button>
// //       <p>{message}</p>
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useState } from "react";
// import { callBananaAPI } from "./api";

// const App = () => {
//     const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
//     const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
//     const [userAnswer, setUserAnswer] = useState("");
//     const [result, setResult] = useState("");

//     const checkAnswer = async () => {
//         const correctSum = num1 + num2;
//         if (parseInt(userAnswer) === correctSum) {
//             setResult("✅ Correct!");
//         } else {
//             setResult("❌ Incorrect, Try Again!");
//         }

//         // Optional: Send data to Banana API
//         const response = await callBananaAPI({ question: `${num1} + ${num2}`, userAnswer });
//         console.log(response); // Process response if needed
//     };

//     const generateNewNumbers = () => {
//         setNum1(Math.floor(Math.random() * 10));
//         setNum2(Math.floor(Math.random() * 10));
//         setUserAnswer("");
//         setResult("");
//     };

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>Summing Game</h1>
//             <h2>{num1} + {num2} = ?</h2>
//             <input
//                 type="number"
//                 value={userAnswer}
//                 onChange={(e) => setUserAnswer(e.target.value)}
//             />
//             <button onClick={checkAnswer}>Check Answer</button>
//             <button onClick={generateNewNumbers}>New Numbers</button>
//             <h3>{result}</h3>
//         </div>
//     );
// };

// export default App;
