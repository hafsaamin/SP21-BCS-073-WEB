import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function Signup() {
    const navigate = useNavigate();

    function errorshandling() {
        const phoneElement = document.getElementById('phone');
        const passwordElement = document.getElementById('password');
        const cpasswordElement = document.getElementById('cpassword');
        const phoneError = document.getElementById('phone-error');
        const passwordError = document.getElementById('password-error');
        const cpasswordError = document.getElementById('cpassword-error');
        const signupButton = document.getElementById('Signup-button');
    
        if (phoneElement && passwordElement && cpasswordElement) {
            const phone = phoneElement.value;
            const password = passwordElement.value;
            const cpassword = cpasswordElement.value;
    
            if (phone.length === 11) {
                phoneError.style.display = 'none';
            } else {
                phoneError.style.display = 'flex';
            }
    
            if (password.length >= 8) {
                passwordError.style.display = 'none';
            } else {
                passwordError.style.display = 'flex';
            }
    
            if (password === cpassword) {
                cpasswordError.style.display = 'none';
            } else {
                cpasswordError.style.display = 'flex';
            }
    
            if (phone.length === 11 && password.length >= 8 && password === cpassword) {
                signupButton.disabled = false;
            } else {
                signupButton.disabled = true;
            }
        }
    }
    

    const [user, setUser] = useState({
        sname: "", semail: "", sphone: "", spassword: "", scpassword: ""
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
        setTimeout(errorshandling, 1000);  // Call errorshandling after a delay
    };    

    function handleLogin() {
        navigate('/login');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { sname, semail, sphone, spassword, scpassword } = user;
    
        try {
            const res = await axios.post("http://localhost:5001/register", {
                sname,
                semail,
                sphone,
                spassword,
                scpassword,
            });
    
            console.log(res.data); // Log the response
    
            if (res.data.success) {
                navigate('/');
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <main>
            <div className="login_formdiv">
                <h1 className="signup_h1">SIGN UP</h1>
                <form>
                    <div className="login_formdesign">
                        Name: <input type="text" name="sname" required={true} onChange={handleInputs} id="name" />
                    </div>

                    <div className="login_formdesign">
                        Email: <input type="text" name="semail" required={true} onChange={handleInputs} id="email" />
                    </div>

                    <div className="login_formdesign">
                        Phone: <input type="text" name="sphone" required={true} onChange={handleInputs} id="phone" />
                        <div id='phone-error' className='errors'>
                            *Phone Number is Incorrect
                        </div>
                    </div>

                    <div className="login_formdesign">
                        Password: <input type="password" name="spassword" required={true} onChange={handleInputs} id="password" />
                        <div id='password-error' className='errors'>
                            *Password must be atleast 8 digits
                        </div>
                    </div>

                    <div className="login_formdesign">
                        Confirm Password: <input type="password" name="scpassword" required={true} onChange={handleInputs} id="cpassword" />
                        <div id='cpassword-error' className='errors'>
                            *Password should be same
                        </div>
                    </div>
                    <input className="login_but" type="submit" value="Sign Up" onClick={handleSubmit} id='Signup-button' />

                </form>
                <p className="text-center">
                    Already have an account?{' '}
                    <button className="login_but" id='loginbutton' onClick={handleLogin}>
                        Login
                    </button>
                </p>
            </div>
        </main>
    )
}

export default Signup;