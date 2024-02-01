import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../components/utils/Loader";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth,provider } from "../Auth/firebase";
import { useDispatch } from "react-redux";
import { saveAuthUser } from "../store/features/AuthSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* EMAIL PROVIDER
  const loginUser = async (e) => {
    e.preventDefault();

    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setLoading(false);
        const { user } = userCredentials;
        
        dispatch(
          saveAuthUser({
            token: JSON.stringify(user.accessToken),
            user: JSON.stringify(user),
          })
        );

        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };

  //* google provider
  const loginWithGoogle = async (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        
        const user = result.user;
        dispatch(
          saveAuthUser({
            token: JSON.stringify(user.accessToken),
            user: JSON.stringify(user),
          })
        );

        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <LoginWrapper>
      <h5>Login</h5>
      <form action="" method="POST" onSubmit={loginUser}>
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
          {loading ? <Loader /> : "Login"}
        </button>
        <button className="btn w-100" onClick={loginWithGoogle}>
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            width="30"
            alt=""
            className="me-2"
          />{" "}
          Sign In with Google
        </button>
        <Link to="/signup" className="text-center d-block mt-2 text-primary">
          SignUp
        </Link>
      </form>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.section``;

export default Login;
