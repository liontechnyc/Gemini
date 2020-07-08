import React from 'react';
import styled from 'styled-components';

export interface SectionProps {
  name: string;
  fluid?: boolean;
  containerClass?: string;
  containerStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

/** Used to compose elements within Design grid */
const Section = ({
  name,
  fluid,
  containerClass,
  containerStyle,
  children,
}: SectionProps) => {
  const SectionContainer = styled.section({
    display: 'flex',
    flex: fluid ? '1 0 auto' : undefined,
    gridArea: name,
  })
  return (
    <SectionContainer
      id={name}
      className={containerClass}
      style={containerStyle}
    >
      {children}
    </SectionContainer>
  );
};

export default Section;
