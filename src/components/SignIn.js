import Paper from "./Paper";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const handlePasswordShow = (e) => {
        setPasswordShow(e.target.checked);
    }

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the email matches the pattern
        return emailPattern.test(email);
    };

    const getIsFormValid = () => { 
        return (
            validateEmail(email) &&
            password.length > 0
        ); 
    }; 

    const handleSignIn = () => {
        setEmail("");
        setPassword("");
    }
    return (
        <div className="h-screen bg-slate-200 flex items-center justify-center">
            <Link to="/">
            <button className="btn glass">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>
            </button>
            </Link>
            <Paper title="Log Masuk" custom={["p-10 m-10"]} customTitle={["text-2xl"]} titleBool={true}>
                <div className="pb-3">
                    <label className="input input-bordered flex items-center gap-2">
                    E-mail
                    <input 
                        type="email" 
                        className="grow"
                        value={email}
                        placeholder="Masukkan e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </label>
                </div>
                <div className="pb-3">
                    <label className="input input-bordered flex items-center gap-2">
                    Kata Laluan
                    <input 
                        type={passwordShow ? "text" : "password"} 
                        className="grow"
                        value={password}
                        placeholder="Masukkan kata laluan"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </label>
                </div>
                <div className="pb-3">
                    <label className="label">
                    Lihat kata laluan
                    <input 
                        type="checkbox" 
                        className="checkbox" 
                        onChange={handlePasswordShow}
                    />
                    </label>
                </div>
                <div className="flex justify-end pb-5">
                    <button className="btn hover:btn-ghost" onClick={handleSignIn} 
                    // disabled={!getIsFormValid()}
                    >
                        Log Masuk
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="">
                    <p className="italic">
                        Belum daftar akaun? 
                        <span className="pl-1 text-primary underline"><Link to="/signup">Daftar sekarang</Link></span>
                    </p>
                </div>
            </Paper>
        </div>
    )
}

export default SignIn;