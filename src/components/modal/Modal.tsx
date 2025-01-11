import React, { useEffect, useState, useRef } from "react";
import "./modal.scss";

type ModalProps = {
  id?: string;
  active?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({ id, active, children }) => {
  const [state, setState] = useState(active);

  useEffect(() => {
    console.log("Atualizei");
    setState(active);
  }, [active]);

  return (
    <div id={id} className={`modal ${active ? "active" : ""}`}>
      {children}
    </div>
  );
};

export const ModalContent: React.FC<ModalProps> = ({ children, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    const parentNode = ref.current?.parentNode as HTMLElement | null;

    if (parentNode) parentNode.classList.remove("active");

    onClose?.();
  };

  return (
    <div ref={ref} className="modal__content">
      {children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x">teste</i>
      </div>
    </div>
  );
};

export default Modal;
