/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, SetStateAction, useContext, useState } from "react";
import React from "react";
import { api } from "../services/api";

export const ActionsContext = createContext({} as iActionsContext);

interface iActionsProviderProps {
  children: React.ReactNode;
}

interface iActionsContext {
  handleAdd: () => void;
  handleClose: () => void;
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
  titleHandler: (event: { target: { value: SetStateAction<string> } }) => void;
  statusHandler: (event: { target: { value: SetStateAction<string> } }) => void;
  handleSubmit: (event: { preventDefault: () => void }) => void;
  handleDelete: (id: string) => void;
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
  status: string;
  setStatus: React.Dispatch<SetStateAction<string>>;
}

export const ActionsProvider = ({ children }: iActionsProviderProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const handleAdd = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const titleHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const statusHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const handleDelete = async (id: string) => {
      const token = localStorage.getItem("@fullstack:");
      try {
        const response = await api.delete(`contacts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOpenModal(false);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <ActionsContext.Provider
        value={{
          handleAdd,
          handleClose,
          title,
          setTitle,
          status,
          setStatus,
          titleHandler,
          statusHandler,
          handleSubmit,
          handleDelete,
          setOpenModal,
          openModal,
        }}
      >
        {children}
      </ActionsContext.Provider>
    );
  };
};
