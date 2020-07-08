import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Section, { SectionProps } from './Section';

describe('Section', () => {
  let props: SectionProps;

  beforeEach(() => {
    props = {
      name: 'my-ui-region',
    };
  });

  const renderComponent = () => render(<Section {...props} />);

  it('should control grid template area', () => {
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.gridArea).toBe(props.name);
  });
  it('should inject container style', () => {
    props.containerStyle = { height: 500 };
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.height).toBe('500px');
  });
  it('should inject container class', () => {
    props.containerClass = 'section__container';
    const { container } = renderComponent();
    expect(container.firstElementChild.classList).toContain(
      props.containerClass
    );
  });
  it('should control flex basis on fluid mode', () => {
    props.fluid = true;
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.flex).toBe('1 0 auto');
  })
});
