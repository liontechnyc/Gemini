import React from 'react';
export interface BlockProps {
    renderAs?: React.ElementType;
    fluid?: boolean;
    centered?: boolean;
    isBlockLike?: boolean;
    inline?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
/** A container for wrapping design elements */
declare const Block: ({ renderAs, fluid, centered, isBlockLike, inline, className, style, children, }: BlockProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
export default Block;
