import React from 'react';
export interface ModalProviderProps {
    children: React.ReactNode;
}
export declare const ModalProvider: ({ children }: ModalProviderProps) => JSX.Element;
export interface ModalProps {
    visible: boolean;
    popup?: boolean;
    layer?: number;
    children: React.ReactNode;
}
declare const Modal: ({ visible, popup, layer, children }: ModalProps) => any;
export default Modal;
