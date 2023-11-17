import React, { useState, useContext, createContext } from "react";
import app, {
  loginRequest,
  logout,
  registerRequest,
} from "./authentication.service";

const AuthContext = createContext({});

const useAuthContext = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  app.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setLoading(false);
    } else {
      setLoading(false);
    }
  });
  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then((u) => setUser(u))
      .catch((e) => setError(e.toString()))
      .finally(() => setLoading(false));
  };

  const onRegister = (email, password, confirmPassword) => {
    if (confirmPassword !== password) {
      setError("Error:Password do not match");
      return;
    }

    setError("");
    setLoading(true);
    return registerRequest(email, password)
      .then((value) => setUser(value))
      .catch((e) => setError(e.toString()))
      .finally(() => setLoading(false));
  };

  const onLogout = () => {
    setUser(null);
    logout();
  };
  return {
    user,
    loading,
    error,
    login: onLogin,
    register: onRegister,
    isAuthenticated: !!user,
    onLogout,
  };
};

export const AuthContextProvider = ({ children }) => {
  const value = useAuthContext();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
