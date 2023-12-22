import axios from 'axios';
const { useState, useEffect } = require('react');
const { useNavigate } = require('react-router-dom');

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/login');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const navigateToSignup = () => {
        navigate('/signup')
    };

    const validation = () => {
        const name = document.getElementById('lname').value;
        const password = document.getElementById('lpassword').value;
        const nameError = document.getElementById('lname-error');
        const passwordError = document.getElementById('lpassword-error');
        for(let i=0; i<data.length; i++){
            if(name===data[i].semail && password===data[i].spassword){
                navigate('/');
                break;
            }
            else if(name!==data[i].semail && password===data[i].spassword){
                nameError.style.display = 'flex';
                break;
            }
            else if(password!==data[i].spassword && name===data[i].semail){
                nameError.style.display = 'none';
                passwordError.style.display = 'flex';
                break;
            }
            else{
                nameError.style.display = 'flex';
                passwordError.style.display = 'flex';
                break;
            }
        }
    };

    return (
        <div className="login_formdiv">
            <h1 className="signup_h1">LOG IN</h1>
            <form>
                <div className="login_formdesign" id="email">
                    Email: <input type="email" name="semail" required id='lname' />
                    <div id="lname-error">
                        *Email is incorrect
                    </div>
                </div>

                <div className="login_formdesign" id="password">
                    Password: <input type="password" name="spassword" required id='lpassword' />
                    <div id="lpassword-error">
                        *Password is incorrect
                    </div>
                </div>

                <input className="login_but" type="button" value="Log In" onClick={validation} />

            </form>
            <p className="text-center">
                Don't have an account?{' '}
                <button className="login_but" id='loginbutton' onClick={navigateToSignup}>
                    Sign Up
                </button>
            </p>
        </div>
    );
}

export default Login;
