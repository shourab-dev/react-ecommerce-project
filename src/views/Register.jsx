import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { auth } from "../Auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/utils/Loader"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  //* SIGNUP
  const signUpUser = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          setLoading(false)
          navigate("/login");

        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h5>Register</h5>

      <form action="" method="post" onSubmit={signUpUser}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email Address"
          onKeyUp={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onKeyUp={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary rounded-0 w-100">
          {loading ? <Loader/> : "Sign Up"} 
        </button>
        <Link to="/login" className="text-center d-block mt-2 text-primary">
          Already have an account?
        </Link>
      </form>
    </>
  );
};

export default Register;
