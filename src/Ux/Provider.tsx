import React from 'react'
import { MediaContextProvider } from './View';
import { ModalProvider } from '../Modal/Modal';

/** Root context provider */
const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
      <MediaContextProvider>
        <ModalProvider>{children}</ModalProvider>
      </MediaContextProvider>
    );
};
  
export default Provider;