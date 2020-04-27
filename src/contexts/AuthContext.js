import React, { createContext, useState } from 'react';

const AuthContext = createContext({
    isLogin : false,
    setLogin: ()=>{}
});

const AuthProvider = ({children}) =>{
    const setLogin = () =>{

    };
}

export {AuthProvider};

export default AuthContext;