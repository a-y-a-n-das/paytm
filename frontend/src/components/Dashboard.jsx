import { useEffect, useState } from "react";
import { useRecoilState ,useSetRecoilState } from "recoil";
import { firstNameAtom, lastNameAtom, tousernameAtom, usernameAtom } from "../atoms/userAtom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const [firstName, setFirstName] = useRecoilState(firstNameAtom);
    const [lastName, setLastName] = useRecoilState(lastNameAtom);
    const setToUsername = useSetRecoilState(tousernameAtom);
    const setUsername = useSetRecoilState(usernameAtom);
    const [nameList, setNameList] = useState([]);   
    const [name, setName] = useState("");   
    const [balance, setBalance] = useState(0);
    const navigate = useNavigate();


    useEffect(()=>{
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        
        const fetchProfile = async () => {
            try {
                const response = await axios.get("/user/profile", {
                    params: {
                        username: username,
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsername(response.data.username);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Failed to fetch profile:", error);

            }

        };

        fetchProfile();
    },[setFirstName, setLastName, setUsername]);    


    const handleSearch = async (e) => {
        const query = e.target.value;
        if(query === "") {
            setNameList([]);
            return;
        }
        try {
            const response = await axios.get("/user/like", {
                params: { string: query },
            });
            setNameList(response.data.usersList);
        } catch (error) {
            console.error("Search failed:", error);
        }
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <div className="user-info">
                    <p><strong>Name:</strong> {firstName} {lastName}</p>
                    <p><strong>Balance:</strong> ${balance}</p>
                </div>
            </div>
            
            <div className="send-money-section">
                <h3>Send Money</h3>
                <input type="text" value={name} onChange={(e)=> { setName(e.target.value); handleSearch(e); }}  placeholder="Search users..." className="input-field" />

                <div className="user-list">
                    {nameList.map((n, index)=>(
                        <div key={index} className="user-item"> 
                            <span>{n.firstName} {n.lastName}</span>
                            <button onClick={()=>{ setToUsername(n.username); navigate(`/transfer`)}} className="btn-small">Send
                            </button>
                        </div>))}
                </div>
            </div>
        </div>      
        
    )
    
    }

export default Dashboard;