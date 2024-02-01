import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../Auth/firebase";

import { useNavigate } from "react-router-dom";
import { logoutAuthUser } from "../../store/features/AuthSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    signOut(auth)
      .then(() => {
        dispatch(logoutAuthUser());
        navigate("/");
      })
      .catch((error) => alert(error.message));
  }, []);
  return <></>;
};

export default Logout;
