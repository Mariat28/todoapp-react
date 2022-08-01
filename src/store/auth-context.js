import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout:  () => {},
  onLogin: (email, password) =>{},
});
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (uname, password) =>{
    sessionStorage.setItem('isLoggedIn', true);
    sessionStorage.setItem('username', uname);
    setIsLoggedIn(true);
    console.log('user details', uname, password);
  }
  const logoutHandler =()=>{
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    setIsLoggedIn(false);

  }
  useEffect(()=>{
    console.log('running effect');
  },[isLoggedIn])
 
  useEffect(()=>{
    const userLoggedIn = sessionStorage.getItem('isLoggedIn');
    if(userLoggedIn) {
      setIsLoggedIn(true);
    console.log('effect hook');
    }
  }, []);

  return <AuthContext.Provider  value={{
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  }}>{props.children}</AuthContext.Provider>
};
export default AuthContext;