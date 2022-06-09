import React from 'react';
export interface SectionProps {
    name: string;
    fluid?: boolean;
    containerClass?: string;
    containerStyle?: React.CSSProperties;
    children?: React.ReactNode;
}
/** An organizational unit for templating with <Design/> */
declare const Section: ({ name, fluid, containerClass, containerStyle, children, }: SectionProps) => JSX.Element;
export default Section;
