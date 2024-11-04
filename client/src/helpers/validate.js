import {toast} from 'react-hot-toast';


//validate signin page 
export const usernameValidate = async (values) => {
  const errors = usernameVerify({}, values);
  return errors;
}

//validate password page
export const passwordValidate = async (values) => {
  const errors = passwordVerify({}, values);
  return errors;
}


//validate reset password
export const resetPasswordValidate = async (values) => {
  const errors = resetPasswordVerify({}, values);
  return errors;
}

// validate username 
const usernameVerify = (error ={}, values) => {
  if(!values.username) {
    error.username = toast.error("Username Required")
  }else if(values.username.includes(' ')){
    error.username = toast.error("Invalid Username")
  }
  return error;
}

//validate reset password
const resetPasswordVerify = async (values) =>{
  const errors = passwordVerify({}, values);
  if(values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password Not Match")
  }
  return errors;
}




// validate password
const passwordVerify = (error ={}, values) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if(!values.password) {
    error.password = toast.error("Password Required")
  }else if(values.password.includes(' ')){
    error.password = toast.error("wrong Password")
  }else if(values.password.length < 4) {
    error.password = toast.error('Password must be more than 4 characters long');
  }else if(!specialChars.test(values.password)) {
    error.password = toast.error('Password must have special character');
  }
  return error;
}