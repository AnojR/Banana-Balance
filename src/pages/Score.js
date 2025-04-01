import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Scoreboard = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Retrieve high score & leaderboard from localStorage
    const storedHighScore = localStorage.getItem("highScore");
    const storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore, 10));
    }
    setLeaderboard(storedLeaderboard);

    // Simulated current score (Replace this with real game logic)
    const currentScore = Math.floor(Math.random() * 100);
    setScore(currentScore);

    // Update leaderboard if new score is high enough
    const updatedLeaderboard = [...storedLeaderboard, currentScore].sort((a, b) => b - a).slice(0, 5);
    localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderboard));
    setLeaderboard(updatedLeaderboard);

    // Update high score if new score is higher
    if (currentScore > (storedHighScore || 0)) {
      localStorage.setItem("highScore", currentScore);
      setHighScore(currentScore);
    }
  }, []);

  const resetScores = () => {
    localStorage.removeItem("highScore");
    localStorage.removeItem("leaderboard");
    setHighScore(0);
    setLeaderboard([]);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('/pic/home 1.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "350px",
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h4" gutterBottom>
          🏆 Scoreboard
        </Typography>
        <Typography variant="h5">Your Score: {score}</Typography>
        <Typography variant="h5" sx={{ marginTop: "10px", color: "#ffd700" }}>
          🎯 High Score: {highScore}
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "20px", fontWeight: "bold" }}>
          🔥 Leaderboard (Top 5 Scores)
        </Typography>
        {leaderboard.length === 0 ? (
          <Typography>No scores yet.</Typography>
        ) : (
          leaderboard.map((s, index) => (
            <Typography key={index}>{index + 1}. {s} pts</Typography>
          ))
        )}

        <Button fullWidth variant="contained" sx={buttonStyle} onClick={() => navigate("/")}>
          Back to Home
        </Button>
        <Button fullWidth variant="contained" sx={buttonStyle} onClick={resetScores}>
          Reset Scores
        </Button>
      </Box>
    </Box>
  );
};

const buttonStyle = {
  backgroundColor: "#f4a261",
  color: "#fff",
  marginTop: "10px",
  "&:hover": { backgroundColor: "#e76f51" },
};

export default Scoreboard;
