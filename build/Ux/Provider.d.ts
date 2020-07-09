import React from 'react';
/** Wrap UX providers (SSR included) */
declare const Provider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export default Provider;
