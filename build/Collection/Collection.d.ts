import React from 'react';
export declare type CollectionDirection = 'vertical' | 'horizontal';
export declare type CollectionAlignment = {
    horizontal?: 'start' | 'end' | 'center' | 'space-between' | 'around' | 'evenly';
    vertical?: 'start' | 'end' | 'center' | 'stretch';
    content?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'around';
};
export interface CollectionProps {
    fluid?: boolean;
    renderAs?: React.ElementType;
    direction: CollectionDirection;
    reverse?: boolean;
    align?: CollectionAlignment;
    items?: React.ReactElement[];
    containerClass?: string;
    containerStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
    itemClass?: string;
    emptyState?: React.ReactElement;
}
/** Responsive 1-dimensional flex container */
declare const Collection: ({ renderAs, fluid, direction, align, reverse, items, containerStyle, containerClass, itemStyle, itemClass, emptyState, }: CollectionProps) => JSX.Element;
export default Collection;
