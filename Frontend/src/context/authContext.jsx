import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProfile, login } from "../api/adminApi.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await getProfile();
      setAdmin(data);
    } catch (error) {
      localStorage.removeItem("token");
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  const loginAdmin = async (credentials) => {
    try {
      const { data } = await login(credentials);

      localStorage.setItem("token", data.token);

      const profile = await getProfile();

      setAdmin(profile.data);

      return {
        success: true,
      };
    } catch (error) {
      localStorage.removeItem("token");
      setAdmin(null);

      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAdmin(null);
  };

  const value = useMemo(
    () => ({
      admin,
      loading,
      loginAdmin,
      logout,
      isAuthenticated: !!admin,
    }),
    [admin, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);