import React from 'react';
import { Auth } from './firebase/fire';

export const SignUpUsers=(email,password) => {

    return new Promise(function (resolve, rejetct)
    {
        Auth()
        .createUserWithEmailAndPassword(email,password)
        .then(()=> {
           
            resolve('SignUp Successfully');
        })
        .catch((error)=> {
            rejetct(error);
        });
    });
};

export const SigninUser=(email,password) => {

    return new Promise(function (resolve, rejetct)
    {
        Auth()
        .signInWithEmailAndPassword(email,password)
        .then(()=> {
           
            resolve('SignUp Successfully');
        })
        .catch((error)=> {
            rejetct(error);
        });
    });
};

export const SignOut=() => {

    return new Promise(function (resolve, rejetct)
    {
        Auth()
        .signOut()
        .then(()=> {
           
            resolve('Signout Successfully');
        })
        .catch((error)=> {
            rejetct(error);
        });
    });
};