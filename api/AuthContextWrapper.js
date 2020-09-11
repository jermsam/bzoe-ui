/* eslint-disable no-console */
import React from 'react';
import app from 'api';
import jwtDecode from 'jwt-decode'

export const AuthContext = React.createContext(null);

export default ({ children }) => {
  const [authUser, setAuthUser] = React.useState(null);
  const [loginError, setLoginError] = React.useState(null);
  const handleAuth = React.useCallback(async () => {
   
    
    
    try {
      const  {accessToken}  =await app.reAuthenticate();
      const {sub} =jwtDecode(accessToken);
      const user = await app.service('users').get(sub);
      console.log(sub, 'auth user: ',user);
     setAuthUser(user);
    } catch ({ message }) {
       console.log('Error: ', message);
    }
  }, []);

  React.useEffect(
    () => {
     // handleAuth();
     
    },
    [handleAuth]
  );

  const login = React.useCallback(async (email,phone, token) => {
    let query ={
      strategy: 'passwordless',
      email,
      token,
    }
    if(!email){
      query={
        strategy: 'passwordless',
        phone,
        token,
      }
    }
    try {
      const { accessToken } = await app.authenticate(query);

      console.log('the auth user: ',accessToken)
     // setAuthUser(user);
     
     const {sub} =jwtDecode(accessToken);
     const user = await app.service('users').get(sub);
     console.log(sub, 'auth user: ',user);
    setAuthUser(user);

    // const { user } = await app.reAuthenticate();
    
    //  return user;
    } catch (error) {
       console.log('Error: ', error.message);
       setLoginError(error.message)
    }
  }, []);

  const logout = ()=>{
    localStorage.setItem('feathers-jwt',null);
    app.logout();
    setLoginError(null);
  }

  return (
    <AuthContext.Provider value={{ authUser, login ,handleAuth,logout,loginError}}>
      {children}
    </AuthContext.Provider>
  );
};