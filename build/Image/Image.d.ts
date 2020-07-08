import React from 'react';
export interface ImageProps {
    src?: string;
    defaultImg: string;
    square?: boolean;
    width?: number;
    height?: number;
    alt?: string;
    caption?: string;
    children?: React.ReactNode;
}
declare const Image: ({ src, defaultImg, square, width, height, caption, children, }: ImageProps) => JSX.Element;
export default Image;
