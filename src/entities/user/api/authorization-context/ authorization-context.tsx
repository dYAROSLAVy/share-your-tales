import { useReactiveVar } from "@apollo/client";
import { accessTokenReactiveVar, CLIENT } from "@shared/apollo";
import { AsyncStorageService } from "@shared/utils";
import React, { createContext, useContext, useEffect, useState } from "react";

export type AuthorizationContextType = {
  isLoading: boolean;
  isLogin: boolean;
  changeAccessToken: (value: string) => void;
  logout: () => void;
};

const AuthorizationProviderContext =
  createContext<AuthorizationContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export function AuthorizationProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const accessToken = useReactiveVar(accessTokenReactiveVar);
  const [isLogin, setIsLogin] = useState(false);

  const changeAccessToken = async (value: string) => {
    try {
      await AsyncStorageService.saveAccessToken(value);
      accessTokenReactiveVar(value);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await AsyncStorageService.clearStorage();
    accessTokenReactiveVar(null);
    CLIENT.clearStore();
    setIsLogin(false);
  };

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const tokenFromAsyncStorageService =
          await AsyncStorageService.getAccessToken();
        accessTokenReactiveVar(tokenFromAsyncStorageService);
        setIsLoading(false);
        if (tokenFromAsyncStorageService !== null) {
          setIsLogin(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!accessToken) {
      getAccessToken();
      setIsLogin(false);
    }
  }, [accessToken]);

  return (
    <AuthorizationProviderContext.Provider
      value={{
        isLoading,
        changeAccessToken,
        isLogin,
        logout,
      }}
    >
      {children}
    </AuthorizationProviderContext.Provider>
  );
}

export function useAuthorization() {
  return useContext(AuthorizationProviderContext) as AuthorizationContextType;
}
