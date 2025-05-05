import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await axios.post(
      "https://nxtwave-backened.vercel.app/api/users/login",
      { email, password }
    );
    setUser(response.data.user);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  };

  const register = async (username, email, password) => {
    const resp = await axios.post(
      "https://nxtwave-backened.vercel.app/api/users/register",
      { username, email, password }
    );
    const data = resp.data.user;

    const user = {
      id: data.id,
      username: data.username,
      email: data.email,
    };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
