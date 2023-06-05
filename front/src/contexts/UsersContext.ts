import { createContext } from "react";
import { iLoginFormData } from "../pages/login";
export const UserContext = createContext({} as iUserContext);

export interface iUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
  contacts: [];
}
export interface iRegisterFormData {
  email: string;
  telephone: number;
  fullName: string;

  contact: string;
}
export interface iUserContext {
  user: iUser | null;
  currentRoute: string | null;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
  userLogin: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userRegister: (
    data: iRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}
