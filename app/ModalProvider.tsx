"use client";
import { Input, Modal } from "antd";
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
  const [isLogged, setIsLogged] = useState<boolean>(false);

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

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const Login = () => {
    if (id === "admin" && password === "adminpass") {
      setIsLogged(true);
    }
  };

  return (
    <ModalContext.Provider value={value}>
      {isLogged ? children : <div>Access denied!!</div>}
      <Modal
        open={show}
        onOk={hideModal}
        centered
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>we are currently on testnet</p>
        <h1 className="text-4xl font-bold">Coming soon</h1>
      </Modal>
      <Modal
        title="Login"
        open={!isLogged}
        onOk={Login}
        centered
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Input
          placeholder="Enter your ID"
          onChange={(e) => setId(e.target.value)}
        />
        <Input.Password
          placeholder="Enter your password"
          type="password"
          className="mt-2"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Modal>
    </ModalContext.Provider>
  );
};
