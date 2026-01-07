import axios from "axios";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { tousernameAtom, usernameAtom } from "../atoms/userAtom";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Transfer() {
  const [amount, setAmount] = useState(0);
  const username = useRecoilValue(usernameAtom);
  const tousername = useRecoilValue(tousernameAtom);
  const navigate = useNavigate();

  const handleTransfer = async () => {
    try {
        await axios.post("/account/send", {
        username: username,
        tousername: tousername,
        amount: amount,
      });
      alert(`Transfer successful`);
    } catch (error) {
        alert(`Transfer failed: ${error}`);
    } finally {
      navigate("/dashboard");
    }
  }
  
  return (
    <div className="container">
      <div className="form-box">
        <h2>Transfer Money</h2>
        <p className="transfer-to">To: <strong>{tousername}</strong></p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="input-field"
        />
        <button onClick={handleTransfer} className="btn">Transfer</button>
        <button onClick={() => navigate("/dashboard")} className="btn-secondary">Cancel</button>
      </div>
    </div>
  );
}

export default Transfer;
