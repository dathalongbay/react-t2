import React, { useState, createContext } from 'react'
import { Component2 } from './Component2';

export const UserContext = createContext();
export const Component1 = (props) => {
    const [user, setUser] = useState(
        {
            id: 1,
            username: 'admin', 
            'email': 'admin@gmail.com'
        });

    return (
        <UserContext.Provider value={user}>
            <h1>Demo useContext trong react hook</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

