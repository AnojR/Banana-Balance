
// import React from "react";
// import { Box, TextField, Button, Typography, Grid, Checkbox, FormControlLabel } from "@mui/material";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import { callBananaAPI } from "../api"; // Import API function

// const SignupPage = () => {
//   // Validation schema
//   const validationSchema = Yup.object({
//     fullName: Yup.string().required("Full name is required"),
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

//   const handleSignup = async (values, { setSubmitting }) => {
//     try {
//       const response = await callBananaAPI(values);
//       if (response) {
//         console.log("Signup successful:", response);
//         alert("Signup successful!");
//         // Redirect user or perform further actions
//       } else {
//         alert("Signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Signup Error:", error);
//       alert("An error occurred during signup.");
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
//           width: 500,
//           padding: 3,
//           backgroundColor: "white",
//           borderRadius: 2,
//           boxShadow: 3,
//           opacity: 0.9,
//         }}
//       >
//         <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2 }}>
//           Sign Up
//         </Typography>

//         <Formik
//           initialValues={{ fullName: "", email: "", password: "", confirmPassword: "", rememberMe: false }}
//           validationSchema={validationSchema}
//           onSubmit={handleSignup}
//         >
//           {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
//             <Form>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     name="fullName"
//                     label="Full Name"
//                     variant="outlined"
//                     fullWidth
//                     value={values.fullName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.fullName && Boolean(errors.fullName)}
//                     helperText={touched.fullName && errors.fullName}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     name="email"
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.email && Boolean(errors.email)}
//                     helperText={touched.email && errors.email}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     name="password"
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.password && Boolean(errors.password)}
//                     helperText={touched.password && errors.password}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     name="confirmPassword"
//                     label="Confirm Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     value={values.confirmPassword}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.confirmPassword && Boolean(errors.confirmPassword)}
//                     helperText={touched.confirmPassword && errors.confirmPassword}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={<Checkbox name="rememberMe" color="warning" onChange={handleChange} />}
//                     label="Remember Me"
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     sx={{ backgroundColor: "#FF9800", color: "white", padding: "10px", "&:hover": { backgroundColor: "#D2691E" } }}
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Signing Up..." : "Sign Up"}
//                   </Button>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Typography sx={{ textAlign: "center", marginTop: 2 }}>
//                     Already have an account?{" "}
//                     <Link to="/login" style={{ color: "#FF9800", textDecoration: "none", fontWeight: "bold" }}>
//                       Log In
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

// export default SignupPage;
// import React from "react";
// import { Box, TextField, Button, Typography, Grid, Checkbox, FormControlLabel } from "@mui/material";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";

// const SignupPage = () => {
//   // Validation schema
//   const validationSchema = Yup.object({
//     fullName: Yup.string().required("Full name is required"),
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

//   const handleSignup = async (values, { setSubmitting }) => {
//     console.log("Form Submitted:", values);

//     try {
//       // Simulated API request
//       setTimeout(() => {
//         alert("Signup successful!");
//         setSubmitting(false);
//       }, 1000);
//     } catch (error) {
//       console.error("Signup Error:", error);
//       alert("An error occurred during signup.");
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
//         backgroundColor: "#F5F5F5",
//       }}
//     >
//       <Box
//         sx={{
//           width: { xs: "90%", sm: 400 },
//           padding: 3,
//           backgroundColor: "white",
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2, fontWeight: "bold", color: "#FF9800" }}>
//           Sign Up
//         </Typography>

//         <Formik
//           initialValues={{ fullName: "", email: "", password: "", confirmPassword: "", rememberMe: false }}
//           validationSchema={validationSchema}
//           onSubmit={handleSignup}
//         >
//           {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
//             <Form>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     name="fullName"
//                     label="Full Name"
//                     variant="outlined"
//                     fullWidth
//                     value={values.fullName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.fullName && Boolean(errors.fullName)}
//                     helperText={touched.fullName && errors.fullName}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     name="email"
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.email && Boolean(errors.email)}
//                     helperText={touched.email && errors.email}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     name="password"
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.password && Boolean(errors.password)}
//                     helperText={touched.password && errors.password}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     name="confirmPassword"
//                     label="Confirm Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     value={values.confirmPassword}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.confirmPassword && Boolean(errors.confirmPassword)}
//                     helperText={touched.confirmPassword && errors.confirmPassword}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={<Checkbox name="rememberMe" color="primary" onChange={handleChange} />}
//                     label="Remember Me"
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#FF9800",
//                       color: "white",
//                       padding: "10px",
//                       "&:hover": { backgroundColor: "#D2691E" },
//                     }}
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Signing Up..." : "Sign Up"}
//                   </Button>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Typography sx={{ textAlign: "center", marginTop: 2 }}>
//                     Already have an account?{" "}
//                     <Link to="/login" style={{ color: "#FF9800", textDecoration: "none", fontWeight: "bold" }}>
//                       Log In
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

// export default SignupPage;
// import React from "react";
// import { Box, TextField, Button, Typography, Grid, Checkbox, FormControlLabel } from "@mui/material";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

// const SignupPage = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Validation schema
//   const validationSchema = Yup.object({
//     fullName: Yup.string().required("Full name is required"),
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

//   const handleSignup = async (values, { setSubmitting }) => {
//     console.log("Form Submitted:", values);

//     try {
//       // Simulated API request
//       setTimeout(() => {
//         alert("Signup successful!");
//         setSubmitting(false);
//         navigate("/gamemenu"); // Navigate to gamemenu page after successful signup
//       }, 1000);
//     } catch (error) {
//       console.error("Signup Error:", error);
//       alert("An error occurred during signup.");
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
//         backgroundColor: "#F5F5F5",
//       }}
//     >
//       <Box
//         sx={{
//           width: { xs: "90%", sm: 400 },
//           padding: 3,
//           backgroundColor: "white",
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2, fontWeight: "bold", color: "#FF9800" }}>
//           Sign Up
//         </Typography>

//         <Formik
//           initialValues={{ fullName: "", email: "", password: "", confirmPassword: "", rememberMe: false }}
//           validationSchema={validationSchema}
//           onSubmit={handleSignup}
//         >
//           {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
//             <Form>
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <TextField
//                     name="fullName"
//                     label="Full Name"
//                     variant="outlined"
//                     fullWidth
//                     value={values.fullName}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.fullName && Boolean(errors.fullName)}
//                     helperText={touched.fullName && errors.fullName}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     name="email"
//                     label="Email"
//                     variant="outlined"
//                     fullWidth
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.email && Boolean(errors.email)}
//                     helperText={touched.email && errors.email}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     name="password"
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.password && Boolean(errors.password)}
//                     helperText={touched.password && errors.password}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     name="confirmPassword"
//                     label="Confirm Password"
//                     type="password"
//                     variant="outlined"
//                     fullWidth
//                     value={values.confirmPassword}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={touched.confirmPassword && Boolean(errors.confirmPassword)}
//                     helperText={touched.confirmPassword && errors.confirmPassword}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={<Checkbox name="rememberMe" color="primary" onChange={handleChange} />}
//                     label="Remember Me"
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#FF9800",
//                       color: "white",
//                       padding: "10px",
//                       "&:hover": { backgroundColor: "#D2691E" },
//                     }}
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Signing Up..." : "Sign Up"}
//                   </Button>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Typography sx={{ textAlign: "center", marginTop: 2 }}>
//                     Already have an account?{" "}
//                     <Link to="/login" style={{ color: "#FF9800", textDecoration: "none", fontWeight: "bold" }}>
//                       Log In
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

// export default SignupPage;
import React from "react";
import { Box, TextField, Button, Typography, Grid, Checkbox, FormControlLabel } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  // Validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      });

      alert(response.data.message);
      setSubmitting(false);
      navigate("/gamemenu");
    } catch (error) {
      console.error("Signup Error:", error);
      alert(error.response?.data?.error || "An error occurred during signup.");
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
        backgroundColor: "#F5F5F5",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: 400 },
          padding: 3,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2, fontWeight: "bold", color: "#FF9800" }}>
          Sign Up
        </Typography>

        <Formik
          initialValues={{ fullName: "", email: "", password: "", confirmPassword: "", rememberMe: false }}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="fullName"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.fullName && Boolean(errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox name="rememberMe" color="primary" onChange={handleChange} />}
                    label="Remember Me"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#FF9800",
                      color: "white",
                      padding: "10px",
                      "&:hover": { backgroundColor: "#D2691E" },
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing Up..." : "Sign Up"}
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Typography sx={{ textAlign: "center", marginTop: 2 }}>
                    Already have an account?{" "}
                    <Link to="/login" style={{ color: "#FF9800", textDecoration: "none", fontWeight: "bold" }}>
                      Log In
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

export default SignupPage;
