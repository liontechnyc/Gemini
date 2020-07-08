import React from 'react';
export interface SectionProps {
    name: string;
    fluid?: boolean;
    containerClass?: string;
    containerStyle?: React.CSSProperties;
    children?: React.ReactNode;
}
/** Used to compose elements within Design grid */
declare const Section: ({ name, fluid, containerClass, containerStyle, children, }: SectionProps) => JSX.Element;
export default Section;
