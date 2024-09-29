import { useState } from "react";
import "../styles/Main.css";
import axios from "axios";

const Main = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [invited, setinvited] = useState(false);

  const handleSubmit = async () => {
    setinvited(false);

    if (!email || !name) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const response = await axios.post(
        "http:localhost:4000/api/user/signbeta",
        {
          email,
          name,
        }
      );
      if (response.status == 201) {
        setinvited(true);
      }
    } catch (error) {
      alert("Please fill the correct data ")
    }
  };

  return (
    <div className=" mt-28 bg-stone-200 p-10 rounded-2xl">
      <div className="heading-container">
        <h1>Building Digital Product</h1>
        <h1>For Global Users</h1>
      </div>
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="subtext">Subscribe for our beta launch</div>
        <div className="form-container">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="with your e-mail"
            className="input-field"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="and your name"
            className="input-field"
          />
          <button className="submit-button" onClick={handleSubmit}>
            Grant Access
          </button>
          <div className={invited ? "visible" : "hidden"}>
            You'll be invited soon :)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
