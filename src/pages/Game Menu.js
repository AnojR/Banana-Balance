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
        backgroundImage: 'url("/pic/menu-3.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        // position: "relative",
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
            width: "450px",
            backgroundImage: 'url("/images/wooden_board.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: 3,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 4.5,
            marginRight:"450px",
          }}
        >
          <Typography variant="h5" color="white" fontWeight="bold">Game Menu</Typography>
          <Button variant="contained" sx={{ backgroundColor: "#8B4513"}} fullWidth>
            New Game
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#8B4513" }} fullWidth>
            Continue
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#8B4513" }} fullWidth>
            Score Board
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#8B4513" }} fullWidth>
            Exit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GameMenu;
