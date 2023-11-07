import { useMemo, useCallback } from "react";
import { AuthContext } from "../contexts/Auth";
import { api } from "../services/api";
import { ReactElement, useEffect, useState } from "react";

interface AuthProviderProps {
  children?: ReactElement;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const storedToken = localStorage.getItem("@App:token");

  const [signed, setSigned] = useState<boolean>(!!storedToken);
  const [token, setToken] = useState<string>(storedToken || "");

  useEffect(() => {
    api.interceptors.request.use(function (config) {
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    });
  }, [token]);

  const signIn = useCallback((token: string) => {
    setToken(token);
    setSigned(true);

    localStorage.setItem("@App:token", token);
  }, []);

  const signOut = useCallback(() => {
    setToken("");
    setSigned(false);

    localStorage.removeItem("@App:user");
    localStorage.removeItem("@App:token");
  }, []);

  const context = useMemo(
    () => ({ signed, token, signIn, signOut }),
    [signed, token, signIn, signOut]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
