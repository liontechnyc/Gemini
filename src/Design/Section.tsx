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
  const SectionContainer = styled.section`
    display: flex;
    ${fluid && 'flex: 1;'}
  `;
  return (
    <SectionContainer
      id={name}
      className={containerClass}
      style={{ ...{ gridArea: name }, ...containerStyle }}
    >
      {children}
    </SectionContainer>
  );
};

export default Section;
