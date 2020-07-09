import React from 'react';
export declare type DesignLayoutTemplate = string[][];
export declare type DesignLayout = DesignLayoutTemplate;
export interface DesignGridAxis {
    x: (number | string)[];
    y: (number | string)[];
}
export declare type DesignViewType = 'page' | 'ui';
export interface DesignProps {
    layout: DesignLayout;
    grid: DesignGridAxis;
    gutter?: number | string;
    is?: DesignViewType;
    noHorizontalScroll?: boolean;
    noVerticalScroll?: boolean;
    containerClass?: string;
    containerStyle?: React.CSSProperties;
    children?: React.ReactNode | React.ElementType;
}
/** Reduce template structure into CSS valid template syntax */
export declare function reduceLayout(layout: DesignLayoutTemplate): {
    gridTemplateAreas: string;
};
/** Reduce grid axis into CSS valid template syntax */
export declare function reduceGridTemplate(grid: DesignGridAxis): {
    gridTemplateRows: string;
    gridTemplateColumns: string;
};
/** 2-Dimensional Flex container for templating UI designs */
declare const Design: ({ layout, grid, is, gutter, noHorizontalScroll, noVerticalScroll, containerClass, containerStyle, children, }: DesignProps) => JSX.Element;
export declare const withDesign: (layout: DesignLayoutTemplate, grid: DesignGridAxis, containerStyle: React.CSSProperties) => (Component: React.ComponentType) => (props: React.Props<any>) => JSX.Element;
export default Design;
