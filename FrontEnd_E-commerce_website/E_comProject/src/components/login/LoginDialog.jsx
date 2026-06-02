// import React, { useState, useContext } from 'react'
// import { Box, Button, Dialog, TextField, Typography, FormControlLabel, IconButton, InputAdornment, Checkbox, Link, styled } from '@mui/material'

// import { authenticatesSignup,authenticatesLogin } from '../../service/api';
// import { DataContext } from '../../context/DataProvider';


// //Eye Icon
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';




// // Img URL
// const signupImg = 'https://plus.unsplash.com/premium_photo-1683143646216-83a17d6f8e84?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
// const loginImg = 'https://plus.unsplash.com/premium_photo-1708336928339-de330a142140?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 

// const Component = styled(Box)`
//     height: 70vh;
//     width: 90vh;
//     overflow: hidden;
// `;


// const Image = styled(Box)(({ bg }) => ({
//   background: `#2874f0 url(${bg})`,
//   height: "100%",
//   width: "40%",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   transition: "all 0.5s ease"
// }));

// const FormDialog = styled(Box)`
//     padding : 25px;
//     margin-left: 7px
    
// `;

// const Error = styled(Typography)`
//     font-size: 10px;
//     color :#ff6161;
//     // line-height: 0;
//     // margin-top: 40 px;
//     font-weight: 600
// `

// const accountIntitialValue = {
//     Signup : {
//         view : "signup"
//     },
//     login : {
//         view:"login"
//     }
    
// }

// const signupIntitialValues = {
//     name:"",
//     email:"",
//     pass1:"",
//     agree: false,
//     newsletter: false
// }

// const loginIntitialValues = {
//     email:"",
//     pass1:""
// }


// const LoginDialog = ({ open, setOpen }) => {

//     const [account, toggleAccount] = useState(accountIntitialValue.Signup)

//     const [showPassword, setShowPassword] = useState(false);

//     const [signup, setSignup] = useState(signupIntitialValues);//input value

//     const { setAccount} = useContext(DataContext);

//     const [login,setLogin] = useState(loginIntitialValues);//login input value

//     const [error,setError] = useState(false)

//     const handleClose = ()=>{
//         setOpen(false);
//         toggleAccount(accountIntitialValue.Signup);
//         setError(false);
//     }


//     const toggleLogin = ()=>{
//         toggleAccount(accountIntitialValue.login);
//     }
//     const toggleSignup=()=>{
//         toggleAccount(accountIntitialValue.Signup)
//     }
    

//     const handleChange=(e)=>{
//         const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
//         setSignup({
//             ...signup,
//             [e.target.name]: value
//         });
//     }

//     const signupUser = async()=>{
//        let response = await authenticatesSignup(signup);
//        console.log("Response Status:", response?.status);

//             if(response && response.status === 200){
//                 setAccount(signup.name)
//                 handleClose();
//                 console.log("Response from DB:", response);
//                 alert("Signup Successful!");
                
//             } 
//             else{
//                 console.log("Signup failed logic triggered");
//                 alert("Signup failed! Please try again.");
//             }
       
//     }


//     // for login
//     const onValueChange = (e)=>{
//         setLogin({...login,[e.target.name]:e.target.value});
//     };

//     const loginBtn = async()=>{
//        let response =  await authenticatesLogin(login);
//        console.log(response);
//        if(response.status == 200){
//         handleClose();

//         // user name set
//         const name = response.data.loginuser?.name
//         setAccount(name);

//         //token save
//         localStorage.setItem("token",response.data.token);
//         localStorage.setItem("userName",name);
//        }else{
//             setError(true);
//        }
//     }

//   return (
//     <div>
//       <Dialog open={open} onClose={handleClose}>
//         <Component>
//             {/* <Box style={{display:"flex", height:"100%"}}> */}
//             <Box sx={{
//                     display: "flex",
//                     height: "100%",
//                     alignItems: "center",
                       
//                 }}
//             >
//                 <Image bg={account.view === "signup" ? signupImg : loginImg}>
                    
//                 </Image>

// {/* ----------------------------------------------- SignUp ----------------------------------------------------------- */}

//                 {
//                     account.view === "signup" ?
                   
//                         <FormDialog >
//                             <Typography sx={{ fontWeight: 700, fontSize: '22px' }} >Sign Up</Typography>
//                             <Typography  sx={{fontSize: '11px', color: '#666' }} >Sign up for free to access to in any of our products </Typography>

//                             {/* Name Field */}

//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 2 }}>
//                                 Name 
//                             </Typography>
//                             <TextField  fullWidth size="small" name="name" onChange={(e)=> handleChange(e)} placeholder="Enter name"  
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,   // box height choto
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                         fontSize: '12px'
//                                         }
//                                 }}/>


//                             {/* Email Field */}

//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 1 }}>
//                                 Email Address 
//                             </Typography>
//                             <TextField  fullWidth size="small" name="email" onChange={(e)=> handleChange(e)} placeholder="abc@gmail.com"  
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,   // box height choto
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                         fontSize: '12px'
//                                         }
//                                 }}/>
                            

//                             {/* Passward Field */}
                            
//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 1 }}>
//                                 Password
//                             </Typography>
                            
//                             <TextField  type = {showPassword ? "text" : "password"} name="pass1" onChange={(e)=> handleChange(e)}  fullWidth
//                                 size="small"
//                                 placeholder="Enter password"
                                
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                     fontSize: '12px'
//                                     }
//                                 }}/>


//                             {/* Checkboxes */}
//                             <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
//                                     <FormControlLabel
//                                         sx={{ alignItems: 'flex-start', mb: 1 }}  
//                                         control={<Checkbox name="agree" checked={signup.agree} onChange={handleChange}  
//                                                 sx={{ color: '#333', pt: 0, '&.Mui-checked': { color: '#8A33FD' } }} />}
//                                         label={
//                                             <Typography variant="body2" sx={{ lineHeight: 1.5, fontSize: '11px',mt:0.5}}>
//                                                 Agree to our <Link href="#" underline="always" color="inherit">Terms of use</Link> and <Link href="#" underline="always" color="inherit">Privacy Policy</Link>
//                                             </Typography>
//                                             }
//                                     />
//                                     <FormControlLabel
//                                         sx={{ alignItems: 'flex-start' }} 
//                                         control={<Checkbox name="newsletter" checked={signup.newsletter} onChange={handleChange}  
//                                                 sx={{ color: '#333',  pt: 0, '&.Mui-checked': { color: '#8A33FD' } }} />}
//                                         label={<Typography variant="body2" sx={{fontSize: '11px',mt:0.5}}>Subscribe to our monthly newsletter</Typography>}
//                                     />
//                             </Box>
//                                 {/* Sign Up Button  */}
//                                 <Button 
//                                     fullWidth 
//                                     variant="contained" 
//                                     onClick={signupUser}
//                                     sx={{ mt: 2, height:"35px", bgcolor: '#8A33FD', '&:hover': { bgcolor: '#7226d4' }, textTransform: 'none', py: 1.5, width: '40% '}}
//                                 >
//                                     Sign Up
//                                 </Button>
//                                 {/* Footer Link */}
//                                     <Typography variant="body2" align="left" sx={{ mt: 1, fontSize: '13px' }} onClick={toggleLogin}>
//                                         Already have an account? <Link component="button" sx={{ fontWeight: 'bold', color: 'inherit', fontSize: '13px'}}>Log in</Link>
//                                     </Typography>
//                         </FormDialog>

//                     :
//                         //------------------------------------- LOGING -----------------------------------
//                     <FormDialog sx={{ padding: "30px" }} >
//                             <Typography sx={{ fontWeight: 700, fontSize: '22px' }} >Log In Page</Typography>
                            

//                             {/* Email Field */}

//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 3 }}>
//                                 Email Address 
//                             </Typography>
//                             <TextField  fullWidth size="small" name='email' onChange={(e)=> onValueChange(e)}  placeholder="abc@gmail.com"  
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,
//                                     width: "115%",   
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                         fontSize: '12px'
//                                         }
//                                 }}/>
//                             { error &&
//                                 <Error>Please enter valid email </Error>
//                             }


//                             {/* Passward Field */}
                            
//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 1 }}>
//                                 Password
//                             </Typography>
                            
//                             <TextField  type = {showPassword ? "text" : "password"}   fullWidth
//                                 size="small"
//                                 name='pass1'
//                                 placeholder="Enter password"
//                                 onChange={(e)=> onValueChange(e)}
//                                 type={showPassword ? "text" : "password"}
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,
//                                     width: "115%",
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                     fontSize: '12px'
//                                     }
//                                 }}/>
//                                 {/* { error &&
//                                 <Error>Please enter valid password </Error>
//                             } */}

                            
//                                 {/* Sign Up Button  */}
//                                 <Button 
//                                     fullWidth 
//                                     variant="contained" 
//                                     onClick={loginBtn}
//                                     sx={{ mt: 3, height:"35px", bgcolor: '#8A33FD', '&:hover': { bgcolor: '#7226d4' }, textTransform: 'none', py: 1.5, width: '40% '}}
//                                 >
//                                     Log In
//                                 </Button>
//                                 {/* Footer Link */}
//                                     <Typography variant="body2" align="left" sx={{ mt: 1, fontSize: '13px' }} >
//                                         Don't have an account <Link component="button"  onClick={toggleSignup} sx={{ fontWeight: 'bold', color: 'inherit', fontSize: '13px'}}>Sign Up</Link>
//                                     </Typography>
//                         </FormDialog>


//                  }
//                 </Box>
//         </Component>  
//       </Dialog>  
//     </div>
//   )
// }

// export default LoginDialog










// import React, { useState, useContext } from 'react'
// import { Box, Button, Dialog, TextField, Typography, FormControlLabel, IconButton, InputAdornment, Checkbox, Link, styled } from '@mui/material'

// import { authenticatesSignup,authenticatesLogin } from '../../service/api';
// import { DataContext } from '../../context/DataProvider';


// //Eye Icon
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';

// //////////
// import { useDispatch } from "react-redux";
// import { USER_LOGIN_SUCCESS } from "../../redux/constants/userConstant";


// // Img URL
// const signupImg = 'https://plus.unsplash.com/premium_photo-1683143646216-83a17d6f8e84?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
// const loginImg = 'https://plus.unsplash.com/premium_photo-1708336928339-de330a142140?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 

// const Component = styled(Box)(({ theme }) =>({
//     height: "70vh",
//     width: "90vh",
//     overflow: "hidden",
//     [theme.breakpoints.down("sm")]:{
//         width: '100%',
//         height: "auto",
//         maxHeight: '90vh',
//     }
// }));


// const Image = styled(Box)(({ bg, theme }) => ({
//   background: `#2874f0 url(${bg})`,
//   height: "100%",
//   width: "40%",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   transition: "all 0.5s ease",

//   [theme.breakpoints.down('sm')]:{
//     display: 'none',
//   }
// }));

// const FormDialog = styled(Box)(({ theme }) => ({
//     padding: '25px',
//     marginLeft: '7px',
//     display: 'flex',
//     flexDirection: 'column',
//     width: '60%', 

    
//     [theme.breakpoints.down('sm')]: {
//         width: '100%', 
//         marginLeft: '0',
//         padding: '20px', 
//     },
// }));

// const Error = styled(Typography)`
//     font-size: 10px;
//     color :#ff6161;
//     // line-height: 0;
//     // margin-top: 40 px;
//     font-weight: 600
// `

// const accountIntitialValue = {
//     Signup : {
//         view : "signup"
//     },
//     login : {
//         view:"login"
//     }
    
// }

// const signupIntitialValues = {
//     name:"",
//     email:"",
//     pass1:"",
//     agree: false,
//     newsletter: false
// }

// const loginIntitialValues = {
//     email:"",
//     pass1:""
// }


// const LoginDialog = ({ open, setOpen }) => {

//     const [account, toggleAccount] = useState(accountIntitialValue.Signup)

//     const [showPassword, setShowPassword] = useState(false);

//     const [signup, setSignup] = useState(signupIntitialValues);//input value

//     const { setAccount} = useContext(DataContext);

//     const [login,setLogin] = useState(loginIntitialValues);//login input value

//     const [error,setError] = useState(false)


//     ///
//     const dispatch = useDispatch();



//     const handleClose = ()=>{
//         setOpen(false);
//         toggleAccount(accountIntitialValue.Signup);
//         setError(false);
//     }


//     const toggleLogin = ()=>{
//         toggleAccount(accountIntitialValue.login);
//     }
//     const toggleSignup=()=>{
//         toggleAccount(accountIntitialValue.Signup)
//     }
    

//     const handleChange=(e)=>{
//         const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
//         setSignup({
//             ...signup,
//             [e.target.name]: value
//         });
//     }

//     const signupUser = async()=>{
//        let response = await authenticatesSignup(signup);
//        console.log("Response Status:", response?.status);

//             if(response && response.status === 200){
//                 setAccount(signup.name)
//                 handleClose();
//                 console.log("Response from DB:", response);
//                 alert("Signup Successful!");
                
//             } 
//             else{
//                 console.log("Signup failed logic triggered");
//                 alert("Signup failed! Please try again.");
//             }
       
//     }


//     // for login
//     const onValueChange = (e)=>{
//         setLogin({...login,[e.target.name]:e.target.value});
//     };

//     const loginBtn = async()=>{
//        let response =  await authenticatesLogin(login);
//        console.log("Full Backend Response:", response);
//        console.log(response);
//        if(response.status == 200){
//         handleClose();

//         // user name set
//         const name = response.data.loginuser?.name
//         setAccount(name);

//         // FULL user info
//         const userData = {
//             token: response.data.token,
//             name: name
//         };

//         //token save
//         localStorage.setItem("token",response.data.token);
//         localStorage.setItem("userName",name);

//         // Redux state//////////
//         dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload: userData
//         });

//        }else{
//             setError(true);
//        }
//     }

//   return (
//     <div>
//       <Dialog open={open} onClose={handleClose}>
//         <Component>
//             {/* <Box style={{display:"flex", height:"100%"}}> */}
//             <Box sx={{
//                     display: "flex",
//                     height: "100%",
//                     alignItems: "center",
                       
//                 }}
//             >
//                 <Image bg={account.view === "signup" ? signupImg : loginImg}>
                    
//                 </Image>

// {/* ----------------------------------------------- SignUp ----------------------------------------------------------- */}

//                 {
//                     account.view === "signup" ?
                   
//                         <FormDialog >
//                             <Typography sx={{ fontWeight: 700, fontSize: '22px' }} >Sign Up</Typography>
//                             <Typography  sx={{fontSize: '11px', color: '#666' }} >Sign up for free to access to in any of our products </Typography>

//                             {/* Name Field */}

//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 2 }}>
//                                 Name 
//                             </Typography>
//                             <TextField  fullWidth size="small" name="name" onChange={(e)=> handleChange(e)} placeholder="Enter name"  
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,   // box height choto
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                         fontSize: '12px'
//                                         }
//                                 }}/>


//                             {/* Email Field */}

//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 1 }}>
//                                 Email Address 
//                             </Typography>
//                             <TextField  fullWidth size="small" name="email" onChange={(e)=> handleChange(e)} placeholder="abc@gmail.com"  
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,   // box height choto
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                         fontSize: '12px'
//                                         }
//                                 }}/>
                            

//                             {/* Passward Field */}
                            
//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 1 }}>
//                                 Password
//                             </Typography>
                            
//                             <TextField  type = {showPassword ? "text" : "password"} name="pass1" onChange={(e)=> handleChange(e)}  fullWidth
//                                 size="small"
//                                 placeholder="Enter password"
                                
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                     fontSize: '12px'
//                                     }
//                                 }}/>


//                             {/* Checkboxes */}
//                             <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
//                                     <FormControlLabel
//                                         sx={{ alignItems: 'flex-start', mb: 1 }}  
//                                         control={<Checkbox name="agree" checked={signup.agree} onChange={handleChange}  
//                                                 sx={{ color: '#333', pt: 0, '&.Mui-checked': { color: '#8A33FD' } }} />}
//                                         label={
//                                             <Typography variant="body2" sx={{ lineHeight: 1.5, fontSize: '11px',mt:0.5}}>
//                                                 Agree to our <Link href="#" underline="always" color="inherit">Terms of use</Link> and <Link href="#" underline="always" color="inherit">Privacy Policy</Link>
//                                             </Typography>
//                                             }
//                                     />
//                                     <FormControlLabel
//                                         sx={{ alignItems: 'flex-start' }} 
//                                         control={<Checkbox name="newsletter" checked={signup.newsletter} onChange={handleChange}  
//                                                 sx={{ color: '#333',  pt: 0, '&.Mui-checked': { color: '#8A33FD' } }} />}
//                                         label={<Typography variant="body2" sx={{fontSize: '11px',mt:0.5}}>Subscribe to our monthly newsletter</Typography>}
//                                     />
//                             </Box>
//                                 {/* Sign Up Button  */}
//                                 <Button 
//                                     fullWidth 
//                                     variant="contained" 
//                                     onClick={signupUser}
//                                     sx={{ mt: 2, height:"35px", bgcolor: '#8A33FD', '&:hover': { bgcolor: '#7226d4' }, textTransform: 'none', py: 1.5, width: '40% '}}
//                                 >
//                                     Sign Up
//                                 </Button>
//                                 {/* Footer Link */}
//                                     <Typography variant="body2" align="left" sx={{ mt: 1, fontSize: '13px' }} onClick={toggleLogin}>
//                                         Already have an account? <Link component="button" sx={{ fontWeight: 'bold', color: 'inherit', fontSize: '13px'}}>Log in</Link>
//                                     </Typography>
//                         </FormDialog>

//                     :
//                         //------------------------------------- LOGING -----------------------------------
//                     <FormDialog sx={{ padding: "30px" }} >
//                             <Typography sx={{ fontWeight: 700, fontSize: '22px' }} >Log In Page</Typography>
                            

//                             {/* Email Field */}

//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 3 }}>
//                                 Email Address 
//                             </Typography>
//                             <TextField  fullWidth size="small" name='email' onChange={(e)=> onValueChange(e)}  placeholder="abc@gmail.com"  
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,
//                                     width: "100%",   
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                         fontSize: '12px'
//                                         }
//                                 }}/>
//                             { error &&
//                                 <Error>Please enter valid email </Error>
//                             }


//                             {/* Passward Field */}
                            
//                             <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 1 }}>
//                                 Password
//                             </Typography>
                            
//                             <TextField  type = {showPassword ? "text" : "password"}   fullWidth
//                                 size="small"
//                                 name='pass1'
//                                 placeholder="Enter password"
//                                 onChange={(e)=> onValueChange(e)}
//                                 type={showPassword ? "text" : "password"}
//                                 sx={{
//                                     '& .MuiInputBase-root': {
//                                     height: 35,
//                                     width: "100%",
//                                     fontSize: '13px'
//                                     },
//                                     '& input::placeholder': {
//                                     fontSize: '12px'
//                                     }
//                                 }}/>
//                                 {/* { error &&
//                                 <Error>Please enter valid password </Error>
//                             } */}

                            
//                                 {/* Sign Up Button  */}
//                                 <Button 
//                                     fullWidth 
//                                     variant="contained" 
//                                     onClick={loginBtn}
//                                     sx={{ mt: 3, height:"35px", bgcolor: '#8A33FD', '&:hover': { bgcolor: '#7226d4' }, textTransform: 'none', py: 1.5, width: '40% '}}
//                                 >
//                                     Log In
//                                 </Button>
//                                 {/* Footer Link */}
//                                     <Typography variant="body2" align="left" sx={{ mt: 1, fontSize: '13px' }} >
//                                         Don't have an account <Link component="button"  onClick={toggleSignup} sx={{ fontWeight: 'bold', color: 'inherit', fontSize: '13px'}}>Sign Up</Link>
//                                     </Typography>
//                         </FormDialog>


//                  }
//                 </Box>
//         </Component>  
//       </Dialog>  
//     </div>
//   )
// }

// export default LoginDialog




import React, { useState, useContext } from 'react'
import { Box, Button, Dialog, TextField, Typography, FormControlLabel, IconButton, InputAdornment, Checkbox, Link, styled } from '@mui/material'
 
import { authenticatesSignup, authenticatesLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
 
// Eye Icons
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
 
import { useDispatch } from "react-redux";
import { USER_LOGIN_SUCCESS } from "../../redux/constants/userConstant";
 
// Img URL
const signupImg = 'https://plus.unsplash.com/premium_photo-1683143646216-83a17d6f8e84?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const loginImg = 'https://plus.unsplash.com/premium_photo-1708336928339-de330a142140?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
 
const Component = styled(Box)(({ theme }) => ({
    height: "70vh",
    width: "90vh",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
        width: '100%',
        height: "auto",
        maxHeight: '90vh',
    }
}));
 
const Image = styled(Box)(({ bg, theme }) => ({
    background: `#2874f0 url(${bg})`,
    height: "100%",
    width: "40%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "all 0.5s ease",
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }
}));
 
const FormDialog = styled(Box)(({ theme }) => ({
    padding: '25px',
    marginLeft: '7px',
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: '0',
        padding: '20px',
    },
}));
 
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    font-weight: 600;
`;
 
const accountInitialValue = {
    Signup: { view: "signup" },
    login: { view: "login" }
}
 
const signupInitialValues = {
    name: "",
    email: "",
    pass1: "",
    agree: false,
    newsletter: false
}
 
const loginInitialValues = {
    email: "",
    pass1: ""
}
 
const LoginDialog = ({ open, setOpen }) => {
 
    const [account, toggleAccount] = useState(accountInitialValue.Signup);
    const [showPassword, setShowPassword] = useState(false);
    const [signup, setSignup] = useState(signupInitialValues);
    const { setAccount } = useContext(DataContext);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
 
    const dispatch = useDispatch();
 
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValue.Signup);
        setError(false);
        setShowPassword(false);
    }
 
    const toggleLogin = () => {
        toggleAccount(accountInitialValue.login);
        setError(false);
        setShowPassword(false);
    }
 
    const toggleSignup = () => {
        toggleAccount(accountInitialValue.Signup);
        setError(false);
        setShowPassword(false);
    }
 
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setSignup({ ...signup, [e.target.name]: value });
    }
 
    // FIX: Signup হলে শুধু login page-এ নিয়ে যাবে, setAccount করবে না
    const signupUser = async () => {
        let response = await authenticatesSignup(signup);
        console.log("Response Status:", response?.status);
 
        if (response && response.status === 200) {
            // Signup successful → login page-এ redirect করো
            toggleLogin();
            setSignup(signupInitialValues); // form clear
        } else {
            alert("Signup failed! Please try again.");
        }
    }
 
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }
 
    // FIX: Login হলে dialog বন্ধ, name show, home-এ যাবে
    const loginBtn = async () => {
        let response = await authenticatesLogin(login);
        console.log("Full Backend Response:", response);
 
        if (response.status === 200) {
            handleClose(); // dialog বন্ধ
 
            const name = response.data.loginuser?.name;
            setAccount(name); // header-এ name show করবে
 
            const userData = {
                token: response.data.token,
                name: name
            };
 
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userName", name);
 
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: userData
            });
 
        } else {
            setError(true);
        }
    }
 
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <Component>
                    <Box sx={{ display: "flex", height: "100%", alignItems: "center" }}>
 
                        <Image bg={account.view === "signup" ? signupImg : loginImg} />
 
                        {/* ==================== SIGNUP ==================== */}
                        {account.view === "signup" ? (
 
                            <FormDialog>
                                <Typography sx={{ fontWeight: 700, fontSize: '22px' }}>Sign Up</Typography>
                                <Typography sx={{ fontSize: '11px', color: '#666' }}>
                                    Sign up for free to access to in any of our products
                                </Typography>
 
                                {/* Name */}
                                <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 2 }}>Name</Typography>
                                <TextField
                                    fullWidth size="small" name="name"
                                    value={signup.name}
                                    onChange={handleChange}
                                    placeholder="Enter name"
                                    sx={{
                                        '& .MuiInputBase-root': { height: 35, fontSize: '13px' },
                                        '& input::placeholder': { fontSize: '12px' }
                                    }}
                                />
 
                                {/* Email */}
                                <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 1 }}>Email Address</Typography>
                                <TextField
                                    fullWidth size="small" name="email"
                                    value={signup.email}
                                    onChange={handleChange}
                                    placeholder="abc@gmail.com"
                                    sx={{
                                        '& .MuiInputBase-root': { height: 35, fontSize: '13px' },
                                        '& input::placeholder': { fontSize: '12px' }
                                    }}
                                />
 
                                {/* Password with show/hide */}
                                <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 1 }}>Password</Typography>
                                <TextField
                                    fullWidth size="small" name="pass1"
                                    value={signup.pass1}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                    type={showPassword ? "text" : "password"}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                    size="small"
                                                >
                                                    {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={{
                                        '& .MuiInputBase-root': { height: 35, fontSize: '13px' },
                                        '& input::placeholder': { fontSize: '12px' }
                                    }}
                                />
 
                                {/* Checkboxes */}
                                <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
                                    <FormControlLabel
                                        sx={{ alignItems: 'flex-start', mb: 1 }}
                                        control={
                                            <Checkbox name="agree" checked={signup.agree} onChange={handleChange}
                                                sx={{ color: '#333', pt: 0, '&.Mui-checked': { color: '#8A33FD' } }}
                                            />
                                        }
                                        label={
                                            <Typography variant="body2" sx={{ lineHeight: 1.5, fontSize: '11px', mt: 0.5 }}>
                                                Agree to our <Link href="#" underline="always" color="inherit">Terms of use</Link> and <Link href="#" underline="always" color="inherit">Privacy Policy</Link>
                                            </Typography>
                                        }
                                    />
                                    <FormControlLabel
                                        sx={{ alignItems: 'flex-start' }}
                                        control={
                                            <Checkbox name="newsletter" checked={signup.newsletter} onChange={handleChange}
                                                sx={{ color: '#333', pt: 0, '&.Mui-checked': { color: '#8A33FD' } }}
                                            />
                                        }
                                        label={<Typography variant="body2" sx={{ fontSize: '11px', mt: 0.5 }}>Subscribe to our monthly newsletter</Typography>}
                                    />
                                </Box>
 
                                <Button
                                    fullWidth variant="contained"
                                    onClick={signupUser}
                                    sx={{ mt: 2, height: "35px", bgcolor: '#8A33FD', '&:hover': { bgcolor: '#7226d4' }, textTransform: 'none', py: 1.5, width: '40%' }}
                                >
                                    Sign Up
                                </Button>
 
                                <Typography variant="body2" align="left" sx={{ mt: 1, fontSize: '13px' }} onClick={toggleLogin}>
                                    Already have an account? <Link component="button" sx={{ fontWeight: 'bold', color: 'inherit', fontSize: '13px' }}>Log in</Link>
                                </Typography>
                            </FormDialog>
 
                        ) : (
 
                            /* ==================== LOGIN ==================== */
                            <FormDialog sx={{ padding: "30px" }}>
                                <Typography sx={{ fontWeight: 700, fontSize: '22px' }}>Log In</Typography>
 
                                {/* Email */}
                                <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 3 }}>Email Address</Typography>
                                <TextField
                                    fullWidth size="small" name='email'
                                    value={login.email}
                                    onChange={onValueChange}
                                    placeholder="abc@gmail.com"
                                    sx={{
                                        '& .MuiInputBase-root': { height: 35, width: "100%", fontSize: '13px' },
                                        '& input::placeholder': { fontSize: '12px' }
                                    }}
                                />
                                {error && <Error>Please enter valid email or password</Error>}
 
                                {/* Password with show/hide */}
                                <Typography sx={{ fontSize: '13px', fontWeight: 200, mt: 1 }}>Password</Typography>
                                <TextField
                                    fullWidth size="small" name='pass1'
                                    value={login.pass1}
                                    onChange={onValueChange}
                                    placeholder="Enter password"
                                    type={showPassword ? "text" : "password"}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                    size="small"
                                                >
                                                    {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    sx={{
                                        '& .MuiInputBase-root': { height: 35, width: "100%", fontSize: '13px' },
                                        '& input::placeholder': { fontSize: '12px' }
                                    }}
                                />
 
                                <Button
                                    fullWidth variant="contained"
                                    onClick={loginBtn}
                                    sx={{ mt: 3, height: "35px", bgcolor: '#8A33FD', '&:hover': { bgcolor: '#7226d4' }, textTransform: 'none', py: 1.5, width: '40%' }}
                                >
                                    Log In
                                </Button>
 
                                <Typography variant="body2" align="left" sx={{ mt: 1, fontSize: '13px' }}>
                                    Don't have an account? <Link component="button" onClick={toggleSignup} sx={{ fontWeight: 'bold', color: 'inherit', fontSize: '13px' }}>Sign Up</Link>
                                </Typography>
                            </FormDialog>
                        )}
 
                    </Box>
                </Component>
            </Dialog>
        </div>
    )
}
 
export default LoginDialog