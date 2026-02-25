import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Home(){
    const {user} = useContext(UserContext);
    
    return (
        <div className="flex bg-emerald-200 h-screen text-xl font-medium justify-center items-center">
            <div className="w-96 p-10 bg-cyan-50 rounded-lg">
                {user ?
                (<div>
                    <h1>You are logged in:</h1>
                    <h2>Name: {user.name}</h2>
                    <h2>Email: {user.email}</h2>
                </div>
                ) :
                (
                    <div>
                        Welcome! This is the Homepage!
                    </div>
                )}
            </div>
        </div>
    )
}