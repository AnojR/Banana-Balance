// import React from "react";
// import { Button, Box, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// const App = () => {
//   return (
//     <Box
//   sx={{
//     width: "100vw",
//     height: "100vh",
//     backgroundImage: `url('/pic/home.png')`, // Jungle background
//     backgroundSize: "cover", // Ensures the whole image is displayed
//     // backgroundPosition: "center", // Centers the image within the box
//     backgroundRepeat: "no-repeat", // Prevents repeating the image
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
// >
    
//       <Box
//         sx={{
//           width: "350px",
//           backgroundColor: "rgba(0,0,0,0.5)",
//           padding: "20px",
//           borderRadius: "10px",
//           textAlign: "center",
//           color: "#fff",
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           🍌 Banana Sum Game
//         </Typography>
       
//                     <Button fullWidth variant="contained" sx={buttonStyle}><Link href="/login">
//           Login</Link>
//         </Button>
//         <Button fullWidth variant="contained" sx={buttonStyle}>
//           Sign Up
//         </Button>
//         <Button fullWidth variant="contained" sx={buttonStyle}>
//           Play as Guest
//         </Button>
//         <Button fullWidth variant="contained" sx={buttonStyle}>
//           About
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// const buttonStyle = {
//   backgroundColor: "#f4a261",
//   color: "#fff",
//   marginTop: "10px",
//   "&:hover": { backgroundColor: "#e76f51" },
// };

// export default App;
import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url('/pic/home 1.png')`, // Jungle background
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "350px",
          // backgroundColor: "rgba(0,0,0,0.5)",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          color: "#fff",
          gap:4.5,
        }}
      >
        <Typography variant="h4" gutterBottom>
          🍌 Banana Sum Game
        </Typography>

        <Button fullWidth variant="contained" sx={buttonStyle} onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button fullWidth variant="contained" sx={buttonStyle} onClick={() => navigate("/signup")}>
          Sign Up
        </Button>
        <Button fullWidth variant="contained" sx={buttonStyle} onClick={() => navigate("/guest")}>
          Play as Guest
        </Button>
        <Button fullWidth variant="contained" sx={buttonStyle} onClick={() => navigate("/about")}>
          About
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

export default App;
