"use client"; // Required for stateful logic

import { createContext, useContext, useState, ReactNode } from "react";

// Define User Type
type User = {
  id: number;
  name: string;
  email: string;
} | null;

// Define Context Type
interface AppContextType {
  user: User;
  setUser: (user: User) => void;
  token: string | null;
  setToken: (token: string | null) => void;
}

// Create Context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider Props
interface AppProviderProps {
  children: ReactNode;
}

// Provider Component
export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook for easy context usage
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
