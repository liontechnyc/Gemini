import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Collection, { CollectionProps } from './Collection';

describe('Collection', () => {
  let props: CollectionProps;

  beforeEach(() => {
    props = {
      containerClass: 'container--wrapper',
      direction: 'horizontal',
      items: [<div />, <div />, <div />],
    };
  });

  const renderComponent = () => render(<Collection {...props} />);

  it('should display as CSS Flex container', () => {
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.display).toBe('flex');
  });
  it('should wrap items around container', () => {
    const { container } = renderComponent();
    const itemsLength = container.firstElementChild.childElementCount;
    expect(itemsLength).toBe(props.items.length);
  });
  it('should inject container class name', () => {
    const { container } = renderComponent();
    expect(container.firstElementChild.classList).toContain(
      props.containerClass
    );
  });
  it('should control flex direction on horizontal mode', () => {
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.flexDirection).toBe('row');
  });
  it('should control flex direction on vertical mode', () => {
    props.direction = 'vertical';
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.flexDirection).toBe('column');
  });
  it('should control flex reverse behavior', () => {
    props.reverse = true;
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.flexDirection.split('-')[1]).toBe('reverse');
  });
  it('should control flex basis behavior on fluid mode', () => {
    props.fluid = true;
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.flex).toBe('1');
  });
  it('should inject container style', () => {
    props.containerStyle = {
      width: 100,
    };
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.width).toBe('100px');
  });
  it('should control container alignment', () => {
    props.align = {
      horizontal: 'center',
      vertical: 'center',
      content: 'space-between',
    };
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.justifyContent).toBe(props.align.horizontal);
    expect(style.alignItems).toBe(props.align.vertical);
    expect(style.alignContent).toBe(props.align.content);
  });
  it('should control node render mode', () => {
    props.renderAs = 'nav';
    const { container } = renderComponent();
    expect(container.firstElementChild.nodeName.toLowerCase()).toBe(
      props.renderAs
    );
  });
});
