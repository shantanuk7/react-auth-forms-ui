import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { getUserProfile } from "../services/auth.service";
import { User } from "../types/auth.types";

type Props = {
    children: React.ReactNode;
}

const UserContextProvider: React.FC<Props> = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                try {
                    const response = await getUserProfile();
                    
                    setUser(response.data);
                } catch (error) {
                    localStorage.removeItem("token");
                    setToken(null);
                }
            }
        };

        fetchUser();
    }, [token]);
    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;