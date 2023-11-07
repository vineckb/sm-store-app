import { createContext } from "react";

export interface AuthContextType {
  signed: boolean;
  token: string;

  signIn: (token: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
