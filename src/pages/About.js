import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const GameMenu = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("/pic/about.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        //   alignItems: "center",
          position: "relative",
        }}
      >
        {/* Monkey Illustration */}
        {/* <img
          src="/images/monkey.png"
          alt="Monkey"
          style={{ position: "absolute", right: "-150px", bottom: "0", height: "400px" }}
        /> */}
        
        {/* Wooden Signboard Menu */}
        <Box
          sx={{
            width: "300px",
            backgroundImage: 'url("/images/wooden_board.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: 3,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h5" color="brown" fontWeight="bold">ABOUT</Typography>
          <p><b>Banana Balance</b> is a fun math game. Where kids helper
          a monkey keep banana balanced by solving simple sums.
          Each correctanswer keeps the seasaw steady-get it wrong. </p>
         
        </Box>
      </Box>
    </Box>
  );
};

export default GameMenu;
