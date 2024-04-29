import React from 'react';
import Paper from './Paper';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [passwordShow, setPasswordShow] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCheckPassword = (e) => {
        if (password !== confirmPassword) {
            setPasswordShow(true);
        }
        else if (password === confirmPassword) {
            setPasswordShow(false);
        }
    }

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if the email matches the pattern
        return emailPattern.test(email);
    };

    const getIsFormValid = () => { 
        return ( 
            name && phone &&
            validateEmail(email) && 
            password === confirmPassword &&
            password.length > 0
        ); 
    }; 

    const handleSignUp = () => {
        navigate('/signin');
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    
    return (
        <div className="h-screen bg-slate-200 flex items-center justify-center">
            <Paper title="Daftar masuk" custom={["p-10 m-10"]} customTitle={["text-2xl"]} titleBool={true}>
            <div className="pb-3">
                    <label className="input input-bordered flex items-center gap-2">
                    Nama
                    <input 
                        type="text" 
                        className="grow" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Masukkan nama" 
                    />
                    </label>
                </div>
                <div className="pb-3">
                    <label className="input input-bordered flex items-center gap-2">
                    No. Telefon
                    <input 
                        type="text" 
                        className="grow" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="Masukkan nombor telefon" 
                    />
                    </label>
                </div>
                <div className="pb-3">
                    <label className="input input-bordered flex items-center gap-2">
                    E-mail
                    <input 
                        type="email" 
                        className="grow" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Masukkan e-mail" 
                    />
                    </label>
                </div>
                <div className="pb-3">
                    <label className="input input-bordered flex items-center gap-2">
                    Kata Laluan
                    <input 
                        type="password" 
                        className="grow" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Masukkan kata laluan" 
                    />
                    </label>
                </div>
                <div className="">
                    <label className="input input-bordered flex items-center gap-2">
                    Sahkan Kata Laluan
                    <input 
                        type="password" 
                        className="grow" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        onBlur={handleCheckPassword}
                        placeholder="Masukkan kata laluan" 
                    />
                    </label>
                </div>
                <div className="py-3">
                {passwordShow && (
                    <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Kata laluan tidak sama</span>
                </div>
                )}
                </div>
                <div className="flex justify-end pb-5">
                    <button className="btn hover:btn-ghost" onClick={handleSignUp} disabled={!getIsFormValid()}>
                        Daftar
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="">
                    <p className="italic">
                        Sudah ada akaun? 
                        <span className="pl-1 text-primary underline"><Link to="/signin">Log Masuk</Link></span>
                    </p>
                </div>
            </Paper>
        </div>
    )
}

export default SignUp;