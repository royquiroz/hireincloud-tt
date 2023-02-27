import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface ProfileContextProps {
  children: ReactNode;
}

export const Context = createContext();

const defaultData = {};

export const ContextProfile = ({ children }: ProfileContextProps) => {
  const [profile, setProfile] = useState(defaultData);
  return (
    <Context.Provider value={{ profile, setProfile }}>
      {children}
    </Context.Provider>
  );
};
