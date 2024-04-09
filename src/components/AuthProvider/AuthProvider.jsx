import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = () => {
  const authInfo = createContext();
};

export default AuthProvider;
