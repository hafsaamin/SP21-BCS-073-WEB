// import ContactCSS from '../assets/css/contact.css'
// import ContactCSS2 from '../assets/css/formstyle.css'
import facebooklogo from '../Images/facebook.png';
import twitterlogo from '../Images/twitter.png';
import instalogo from '../Images/insta.png';
import linklogo from '../Images/link.png';
import mediumlogo from '../Images/medium.png';
import pinlogo from '../Images/pin.png';
import axios from 'axios';
import { useState } from 'react';

function Contact() {
    // usestate
    const form = document.getElementById("form")
    const form2 = document.getElementById('form2')
    const submitButton = document.getElementById('submit-button')
    const [user, setUser] = useState({
        fname: "", femail: "", fmsg: ""
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const PostData = async (e) => {
        e.preventDefault();

        const { fname, femail, fmsg } = user;

        try {
            form.style.display = 'none';
            form2.style.display = 'flex';
            const res = await axios.post("http://localhost:5001/submit", {
                fname: fname,
                femail: femail,
                fmsg: fmsg
            });


        } catch (error) {
            console.error("Error:", error.message);
        }
    };


    return (
        <main className='contact-main'>
            <div className="formdiv">
                <form method="POST" >
                    <h1 className="formh1">Contact Us</h1>
                    <div id="form">
                        <p className="formh1">Let us know how we can help you and our team will be in touch as soon as possible!</p>
                        <div className="formdesign" id="name">
                            <input type="text" name="fname" required placeholder="Your Name" className="place" onChange={handleInputs} /><b><span
                                className="formerror"></span></b>
                        </div>
                        <div className="formdesign" id="email">
                            <input type="email" name="femail" required placeholder="Email" className="place" onChange={handleInputs} /> <b><span
                                className="formerror"></span></b>
                        </div>
                        <div className="formdesign" id="msg">
                            <input type="message" name="fmsg" required placeholder="Message`" className="place" onChange={handleInputs} />
                            <b><span
                                className="formerror"></span></b>
                        </div>
                        <button id='submit-button' className="contact-but but" type="submit" value="Send Message" onClick={PostData}>
                            Send Message
                        </button>
                    </div>
                    <div className="formh1" id="form2">
                        Let us know how we can help you and our team will be in touch as soon as possible!
                    </div>
                </form>

            </div>

            <div className="follow">
                <h1>Follow Us</h1>
                <br />
                <p>Follow us on our social channels</p>
                <br />
                <ul>
                    <li><a href="#"><img src={facebooklogo} alt="" /></a></li>
                    <li><a href="#"><img src={twitterlogo} alt="" /></a></li>
                    <li><a href="#"><img src={instalogo} alt="" /></a></li>
                    <li><a href="#"><img src={pinlogo} alt="" /></a></li>
                    <li><a href="#"><img src={mediumlogo} alt="" /></a></li>
                    <li><a href="#"><img src={linklogo} alt="" /></a></li>
                </ul>
                <br />
                <p>MuzliX Ltd. | Tel-Aviv, Israel | <a href="#">info@muz.li </a></p>
            </div>

        </main>
    )
}

export default Contact;



