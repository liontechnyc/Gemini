import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Block, { BlockProps } from './Block';

describe('Block', () => {
  let props: BlockProps;

  beforeEach(() => {
    props = {
      children: <p />,
    };
  });

  const renderComponent = () => render(<Block {...props} />);

  it('should render as CSS Flex as default', () => {
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.display).toBe('flex');
  });
  it('should render as CSS Block on isBlockLike', () => {
    props.isBlockLike = true;
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.display).toBe('block');
  });
  it('should control element on renderAs', () => {
    props.renderAs = 'nav';
    const { container } = renderComponent();
    expect(container.firstElementChild.nodeName).toBe('NAV');
  });
  it('should inject content into container', () => {
    const { container } = renderComponent();
    const content = container.firstElementChild.querySelector('div > *');
    expect(content.nodeName).toBe('P');
  });
  it('should center content in flex mode', () => {
    props.centered = true;
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.justifyContent).toBe('center');
    expect(style.alignItems).toBe('center');
  });
  it('should center content in block mode', () => {
    props.centered = true;
    props.isBlockLike = true;
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.margin).toBe('0px auto');
  });
  it('should control flex basis in fluid mode', () => {
    props.fluid = true;
    const { container } = renderComponent()
    const style = window.getComputedStyle(container.firstElementChild)
    expect(style.flex).toBe('1');
  })
});
