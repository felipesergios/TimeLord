interface UserAuth{
  name:string,
  email:string
}

export const TOKEN_KEY = "@airbnb-Token";
export const USER_COOKIE = "User-details";
export const USER_COOKIE_MAIL = "User-details-mail";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUserDetails = () => localStorage.getItem(USER_COOKIE);

export const getUserLogged = () =>{
  const  User:UserAuth = {email:String(localStorage.getItem(USER_COOKIE_MAIL)),name:String(localStorage.getItem(USER_COOKIE))}
  return User
}

export const login = (token: any,UserDetails:UserAuth) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_COOKIE, UserDetails.name);
  localStorage.setItem(USER_COOKIE_MAIL, UserDetails.email);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};