"use client";
import Link from "next/link";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";  

export default function SignupPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignUp = async () => {
        try {
            setLoading(true);
            console.log("Signing up", user);
            const response = await axios.post("/api/users/signup", user);
    
            if (response.status === 200) { // Check for a successful status code
                toast.success(response.data.message);
                router.push("/login");
            } else {
                throw new Error(response.data.message);
            }
        } catch (error:any) {
            console.log("SignUp failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading? "Processing" : "SignUp"} </h1>
            <hr/>
            <label htmlFor="username" className="mt-5">username</label>
            <input
                className="text-black p-1 mb-3 mt-1 rounded" 
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user,username:e.target.value})}
                placeholder="username"
                />

            <label htmlFor="email">email</label>
            <input 
                className="text-black p-1 mb-3 mt-1 rounded" 
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user,email:e.target.value})}
                placeholder="email"
                />

            <label htmlFor="password">password</label>
            <input
                className="text-black p-1 mb-3 mt-1 rounded"  
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user,password:e.target.value})}
                placeholder="password"
                />
            <button
            className=" mt-5 mb-5 border bg-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onSignUp}
            >{buttonDisabled ? "No signUp" : "SignUp"} </button>
            <Link href="/login">Visit login page</Link>

        </div>

        
    )
}