
export const checkValidData =(email, password) => {


    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if(!isEmailValid) return "Email Address is not Valid";
    if(!isPasswordValid) return "Password must contains at least one digit, one lowercase letter, one uppercase letter, and is at least 8 characters long ";
};