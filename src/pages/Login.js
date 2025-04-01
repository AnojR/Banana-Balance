// import React from 'react';
// import { Box, TextField, Button, Typography, Grid, FormControlLabel, Checkbox, Link } from '@mui/material';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const LoginPage = () => {
//   // Validation schema using Yup
//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email address').required('Required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
//     rememberMe: Yup.boolean(),
//   });

//   const handleLogin = (values) => {
//     console.log('Login Details:', values);
//     // Here you can call your API for login authentication
//   };

//   return (
//     <Box
//       sx={{
//         width: '100vw',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundImage: 'url("/pic/login.png")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           width: 450, // Thinner box
//           padding: 3,
//           backgroundColor: 'white',
//           borderRadius: 2,
//           boxShadow: 3,
//           opacity: 0.7,
//         }}
//       >
//         <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
//           Login
//         </Typography>

//         <Formik
//           initialValues={{ email: '', password: '', rememberMe: false }}
//           validationSchema={validationSchema}
//           onSubmit={handleLogin}
//         >
//           {({ values, handleChange, handleBlur }) => (
//             <Form>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <Field
//                     name="email"
//                     as={TextField}
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={<ErrorMessage name="email" />}
//                     InputProps={{
//                       sx: {
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: 'gray' },
//                           '&:hover fieldset': { borderColor: '#FF9800' },
//                           '&.Mui-focused fieldset': { borderColor: '#FF9800' },
                          
//                         },
//                         "& .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
//                         "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#D2691E" }, // Brown on hover
//                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FF9800" }, // Orange on focus
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     name="password"
//                     as={TextField}
//                     label="Password"
//                     variant="outlined"
//                     type="password"
//                     fullWidth
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={<ErrorMessage name="password" />}
//                     InputProps={{
//                       sx: {
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: 'gray' },
//                           '&:hover fieldset': { borderColor: '#D2691E' },
//                           '&.Mui-focused fieldset': { borderColor: '#FF9800' },
//                         },
//                         "& .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
//                         "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#D2691E" }, // Brown on hover
//                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FF9800" }, // Orange on focus
//                       },
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={
//                       <Field
//                         name="rememberMe"
//                         as={Checkbox}
//                         color="primary"
//                         sx={{
//                           color: '#FF9800',
//                           '&.Mui-checked': { color: '#FF9800' },
//                         }}
//                       />
//                     }
//                     label="Remember Me"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       padding: '10px',
//                       backgroundColor: '#FF9800',
//                       '&:hover': { backgroundColor: '#F57C00' },
//                     }}
//                   >
//                     Login
//                   </Button>
//                 </Grid>
//                 <Grid item xs={12} sx={{ textAlign: 'center' }}>
//                   <Typography variant="body2">
//                     Don't have an account?{' '}
//                     <Link href="/signup" sx={{ color: '#FF9800', fontWeight: 'bold' }}>
//                       Sign Up
//                     </Link>
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   FormControlLabel,
//   Checkbox,
//   Link,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   // Toggle Password Visibility
//   const handleTogglePassword = () => setShowPassword(!showPassword);

//   // Validation Schema
//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email address").required("Required"),
//     password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
//     rememberMe: Yup.boolean(),
//   });

//   // Handle Login API Call
//   const handleLogin = async (values, { setSubmitting, setErrors }) => {
//     try {
//       const response = await axios.post(
//         "https://your-api-url.com/login",
//         values,
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true, // If using cookies for authentication
//         }
//       );

//       console.log("Login successful:", response.data);
//       // Handle successful login (e.g., store token, navigate to dashboard)

//     } catch (error) {
//       console.error("Login error:", error);
//       setErrors({ email: "Invalid email or password" }); // Display error message
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundImage: 'url("/pic/login.png")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Box
//         sx={{
//           width: 450,
//           padding: 3,
//           backgroundColor: "white",
//           borderRadius: 2,
//           boxShadow: 3,
//           opacity: 0.9, // Adjusted for better readability
//         }}
//       >
//         <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2 }}>
//           Login
//         </Typography>

//         <Formik
//           initialValues={{ email: "", password: "", rememberMe: false }}
//           validationSchema={validationSchema}
//           onSubmit={handleLogin}
//         >
//           {({ values, handleChange, handleBlur, isSubmitting }) => (
//             <Form>
//               <Grid container spacing={2}>
//                 {/* Email Field */}
//                 <Grid item xs={12}>
//                   <Field
//                     name="email"
//                     as={TextField}
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={<ErrorMessage name="email" />}
//                     InputProps={{
//                       sx: {
//                         "& .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
//                         "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#D2691E" },
//                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FF9800" },
//                       },
//                     }}
//                   />
//                 </Grid>

//                 {/* Password Field with Visibility Toggle */}
//                 <Grid item xs={12}>
//                   <Field
//                     name="password"
//                     as={TextField}
//                     label="Password"
//                     variant="outlined"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={<ErrorMessage name="password" />}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={handleTogglePassword} edge="end">
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                       sx: {
//                         "& .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
//                         "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#D2691E" },
//                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FF9800" },
//                       },
//                     }}
//                   />
//                 </Grid>

//                 {/* Remember Me Checkbox */}
//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={
//                       <Field
//                         name="rememberMe"
//                         as={Checkbox}
//                         color="primary"
//                         sx={{
//                           color: "#FF9800",
//                           "&.Mui-checked": { color: "#FF9800" },
//                         }}
//                       />
//                     }
//                     label="Remember Me"
//                   />
//                 </Grid>

//                 {/* Submit Button */}
//                 <Grid item xs={12}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     disabled={isSubmitting}
//                     sx={{
//                       padding: "10px",
//                       backgroundColor: "#FF9800",
//                       "&:hover": { backgroundColor: "#F57C00" },
//                     }}
//                   >
//                     {isSubmitting ? "Logging in..." : "Login"}
//                   </Button>
//                 </Grid>

//                 {/* Signup Link */}
//                 <Grid item xs={12} sx={{ textAlign: "center" }}>
//                   <Typography variant="body2">
//                     Don't have an account?{" "}
//                     <Link href="/signup" sx={{ color: "#FF9800", fontWeight: "bold" }}>
//                       Sign Up
//                     </Link>
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;
// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Grid,
//   FormControlLabel,
//   Checkbox,
//   Link,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate function

//   // Toggle Password Visibility
//   const handleTogglePassword = () => setShowPassword(!showPassword);

//   // Validation Schema
//   const validationSchema = Yup.object({
//     email: Yup.string().email("Invalid email address").required("Required"),
//     password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
//     rememberMe: Yup.boolean(),
//   });

//   // Handle Login API Call
//   const handleLogin = async (values, { setSubmitting, setErrors }) => {
//     try {
//       const response = await axios.post(
//         "https://your-api-url.com/login",
//         values,
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true, // If using cookies for authentication
//         }
//       );

//       console.log("Login successful:", response.data);

//       // Redirect to Game Menu after successful login
//       navigate("/game-menu");

//     } catch (error) {
//       console.error("Login error:", error);
//       setErrors({ email: "Invalid email or password" }); // Display error message
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundImage: 'url("/pic/login.png")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Box
//         sx={{
//           width: 450,
//           padding: 3,
//           backgroundColor: "white",
//           borderRadius: 2,
//           boxShadow: 3,
//           opacity: 0.9, // Adjusted for better readability
//         }}
//       >
//         <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2 }}>
//           Login
//         </Typography>

//         <Formik
//           initialValues={{ email: "", password: "", rememberMe: false }}
//           validationSchema={validationSchema}
//           onSubmit={handleLogin}
//         >
//           {({ values, handleChange, handleBlur, isSubmitting }) => (
//             <Form>
//               <Grid container spacing={2}>
//                 {/* Email Field */}
//                 <Grid item xs={12}>
//                   <Field
//                     name="email"
//                     as={TextField}
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={<ErrorMessage name="email" />}
//                     InputProps={{
//                       sx: {
//                         "& .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
//                         "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#D2691E" },
//                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FF9800" },
//                       },
//                     }}
//                   />
//                 </Grid>

//                 {/* Password Field with Visibility Toggle */}
//                 <Grid item xs={12}>
//                   <Field
//                     name="password"
//                     as={TextField}
//                     label="Password"
//                     variant="outlined"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     helperText={<ErrorMessage name="password" />}
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton onClick={handleTogglePassword} edge="end">
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                       sx: {
//                         "& .MuiOutlinedInput-notchedOutline": { borderColor: "gray" },
//                         "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#D2691E" },
//                         "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#FF9800" },
//                       },
//                     }}
//                   />
//                 </Grid>

//                 {/* Remember Me Checkbox */}
//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={
//                       <Field
//                         name="rememberMe"
//                         as={Checkbox}
//                         color="primary"
//                         sx={{
//                           color: "#FF9800",
//                           "&.Mui-checked": { color: "#FF9800" },
//                         }}
//                       />
//                     }
//                     label="Remember Me"
//                   />
//                 </Grid>

//                 {/* Submit Button */}
//                 <Grid item xs={12}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     disabled={isSubmitting}
//                     sx={{
//                       padding: "10px",
//                       backgroundColor: "#FF9800",
//                       "&:hover": { backgroundColor: "#F57C00" },
//                     }}
//                   >
//                     {isSubmitting ? "Logging in..." : "Login"}
//                   </Button>
//                 </Grid>

//                 {/* Signup Link */}
//                 <Grid item xs={12} sx={{ textAlign: "center" }}>
//                   <Typography variant="body2">
//                     Don't have an account?{" "}
//                     <Link href="/signup" sx={{ color: "#FF9800", fontWeight: "bold" }}>
//                       Sign Up
//                     </Link>
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Form>
//           )}
//         </Formik>
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Password is required"),
  });

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post("https://your-api-url.com/login", values, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log("Login successful:", response.data);
      navigate("/game-menu");
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ email: "Invalid email or password" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("/pic/login.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 4,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          opacity: 0.95,
        }}
      >
        <Typography variant="h5" textAlign="center" mb={2}>
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ values, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    as={TextField}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(ErrorMessage.name)}
                    helperText={<ErrorMessage name="email" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password"
                    as={TextField}
                    label="Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(ErrorMessage.name)}
                    helperText={<ErrorMessage name="password" />}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Field name="rememberMe" as={Checkbox} color="primary" />
                    }
                    label="Remember Me"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isSubmitting}
                    sx={{ backgroundColor: "#FF9800", '&:hover': { backgroundColor: "#F57C00" } }}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography variant="body2">
                    Don't have an account? {" "}
                    <Link href="/signup" sx={{ color: "#FF9800", fontWeight: "bold" }}>
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default LoginPage;