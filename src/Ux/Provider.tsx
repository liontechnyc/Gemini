import React from 'react'
import { MediaContextProvider } from './View';
import { ModalProvider } from '../Modal/Modal';

/** Wrap UX providers (SSR included) */
const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
      <MediaContextProvider>
        <ModalProvider>{children}</ModalProvider>
      </MediaContextProvider>
    );
};
  
export default Provider;