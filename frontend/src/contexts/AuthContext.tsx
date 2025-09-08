import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { login, signup, getProfile } from '../api/auth';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, confirmPassword: string) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const userData = await getProfile(storedToken);
          setUser(userData);
          setToken(storedToken);
        } catch (error) {
          console.error('Failed to get profile:', error);
          localStorage.removeItem('token');
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (email: string, password: string, confirmPassword: string) => {
    try {
      const data = await signup(email, password, confirmPassword);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
    } catch (error) {
      throw error;
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
