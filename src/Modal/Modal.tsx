import React, { useRef, useContext, useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Context = React.createContext(null);

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const modalRef = useRef();
  const [context, setContext] = useState();

  // make sure re-render is triggered after initial
  // render so that modalRef exists
  useLayoutEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <>
      <Context.Provider value={context as any}>{children}</Context.Provider>
      <div ref={modalRef as any} />
    </>
  );
};

export interface ModalProps {
  visible: boolean;
  popup?: boolean;
  layer?: number;
  children: React.ReactNode;
}

/** A container for wrapping overlays or popups */
const Modal = ({ visible, popup, layer, children }: ModalProps) => {
  const modalNode = useContext(Context);

  const Container = styled.div`
    display: ${visible ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${layer || 100};
    justify-content: ${popup ? 'center' : 'initial'};
    align-items: ${popup ? 'center' : 'initial'};
  `;

  return modalNode && visible
    ? ReactDOM.createPortal(<Container>{children}</Container>, modalNode)
    : null;
};

export default Modal;
