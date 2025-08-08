"use client";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (Cookies.get("token")) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const authValue = useMemo(
    () => ({ isAuthenticated, setAuthenticated }),
    [isAuthenticated, setAuthenticated]
  );

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
