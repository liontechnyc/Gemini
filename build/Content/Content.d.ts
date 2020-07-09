import React from 'react';
export declare type ContentAlignmentType = 'left' | 'center' | 'right';
export interface ContentProps {
    title?: string;
    subtitle?: string;
    description?: string;
    titleClass?: string;
    alignTitle?: ContentAlignmentType;
    alignContent?: ContentAlignmentType;
    containerClass?: string;
    contentClass?: string;
    containerStyle?: React.CSSProperties;
    children?: React.ReactNode;
}
/** A container for wrapping structured textual information */
declare const Content: ({ title, subtitle, description, alignTitle, alignContent, titleClass, contentClass, containerClass, containerStyle, children, }: ContentProps) => JSX.Element;
export default Content;
