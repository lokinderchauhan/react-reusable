import {  useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
// import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
    let navigate = useNavigate();

  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    console.log("REDirecitng to login ...");
    return  navigate("/login");
  }
  
  console.log("Not redirecting to login ");
  return children;
};

