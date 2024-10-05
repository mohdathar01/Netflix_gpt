export const checkValidData=(email,password,name)=>{

    const isEmailValid=/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isnameValid=/b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    
    if(!isEmailValid)return "Please input valid email address";
    if (!isPasswordValid)return "Please input correct password";
    if (!isnameValid) return "Please Enter valid name";

    return null;
}