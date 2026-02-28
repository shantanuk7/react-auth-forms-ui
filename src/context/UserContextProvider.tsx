import React, { useState } from "react";
import UserContext from "./UserContext";

type User = {
    email: String,
    role: String
}

type Props = {
    children: React.ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;