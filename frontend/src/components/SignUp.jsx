import { useRecoilState } from "recoil";
import { usernameAtom, firstNameAtom, lastNameAtom } from "../atoms/userAtom";
import axios from "axios";
import { useState } from "react";
import "../index.css";

function SignUp() {
    const [username, setUsername] = useRecoilState(usernameAtom); 
    const [firstName, setFirstName] = useRecoilState(firstNameAtom); 
    const [lastName, setLastName] = useRecoilState(lastNameAtom); 
    const [password, setPassword] = useState('');   


    const signupUser = async () => {
        // Placeholder function for signing up a user
        try {
            const response = await axios.post('/user/signup', {
                username,
                firstName,
                lastName,
                password
            });
            console.log('User signed up successfully:', response.data);
        } catch (error) {
            console.error('Error signing up user:', error); 
        }
        
    }

    return <div className="container">
        <div className="form-box">
            <h2>Sign Up</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="input-field" />
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="input-field" />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="input-field" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input-field" />
            <button className="btn" onClick={() => signupUser()}>Sign Up</button>
            <p className="link-text">Already have an account? <a href="/login">Login</a></p>
        </div>
    </div>;
}
export default SignUp;
