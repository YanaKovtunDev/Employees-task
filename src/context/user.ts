import React, { createContext, useContext } from "react";
import { IUser } from "../types";

interface UserContextProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

export const useUserContext = () => {
  const { user, setUser } = useContext(UserContext);

  return { user, setUser };
};
