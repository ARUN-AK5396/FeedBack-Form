import React, {  useState } from "react";
import { firestore } from "../../firebase";
import { Outlet } from "react-router-dom";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import "./main.css"

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    /* logic to authenticate user */
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <EmailVerification handleLogin={handleLogin} />
  );
};

const EmailVerification = ({ handleLogin }) => {
  const db = firestore;
  const [inputValue, setInputValue] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 

  const handleSubmit = async (event) => {
    console.log(inputValue);
    event.preventDefault();
    const q = query(collection(db, "emails"), where("email", "==", inputValue));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(results);

    if (!querySnapshot.empty) {
      // results.forEach(async result =>{
      //   const docRef = doc(db,"emails",result.id);
      //   await deleteDoc(docRef);
      // })
      setIsLogged(true);
      handleLogin();     
    } else {
      document.getElementById('invalid').style.display = "block";
    }
  };
  return (
    <div>
      <h1>Enter Your Email to Continue</h1>
      <form onSubmit={handleSubmit} className="form">
      <div className="item">
      <input type="email"  name="email" required placeholder="Enter your Email " onChange={handleInputChange} />
      </div>
        <button type="submit" className="next-btn">Continue</button>
      </form>
      {isLogged ? (
        <div>Loading....</div>
      ) : (
        <h1 id="invalid" className="invalid">
          You have already Given the feedback or your email address is not valid
        </h1>
      )}
    </div>
  );
};

export default PrivateRoute;
