import React, { Context } from 'react';

type User = {
    email: String,
    role: String
}

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    token: string | null;
    setToken: (token: string | null) => void;
}

const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;