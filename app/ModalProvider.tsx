"use client";
import { Modal } from "antd";
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface ModalProviderProps {
  children: ReactNode;
}

interface IModalContext {
  showModal: () => void;
  hideModal: () => void;
}

const defaultModalContext: IModalContext = {
  showModal: () => {},
  hideModal: () => {},
};

const ModalContext = createContext<IModalContext>(defaultModalContext);

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);

  const showModal = useCallback(() => {
    console.log("show modal");
    setShow(true);
  }, []);

  const hideModal = useCallback(() => {
    setShow(false);
  }, []);

  const value: IModalContext = {
    showModal,
    hideModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal
        open={show}
        onOk={hideModal}
        centered
        cancelButtonProps={{ style: { display: "none" } }}
      
      >
        <p>we are currently on testnet</p>
        <h1 className="text-4xl font-bold">Coming soon</h1>
      </Modal>
    </ModalContext.Provider>
  );
};
