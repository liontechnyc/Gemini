import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Design, { DesignProps, reduceLayout, reduceGridTemplate } from './Design';
import Section from '../Section/Section';

describe('Design', () => {
  let props: DesignProps;

  beforeEach(() => {
    props = {
      layout: [
        ['menu', 'nav'],
        ['menu', 'content'],
        ['menu', 'footer'],
      ],
      grid: {
        x: ['0.15fr', 'auto'],
        y: [72, 'auto', 100],
      },
      children: (
        <>
          <Section name="nav" />
          <Section name="menu" />
          <Section name="content" />
          <Section name="footer" />
        </>
      ),
    };
  });

  const renderComponent = () => render(<Design {...props} />);

  it('should display as CSS Grid container', () => {
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.display).toBe('grid');
  });
  it('should inject container class name', () => {
    props.containerClass = 'ui__container'
    const { container } = renderComponent();
    expect(container.firstElementChild.classList).toContain(
      props.containerClass
    );
  });
  it('should inject container style', () => {
    props.containerStyle = {
      width: 100,
    };
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.width).toBe('100px');
  });
  // ? TODO - Fix gutter Jest glitch - gutter prop not passing through
  //it('should control grid gutter size', () => {
  //  props.gutter = 8;
  //  const { container } = renderComponent();
  //  const style = window.getComputedStyle(container.firstElementChild);
  //  expect(style.gridGap).toBe(props.gutter + 'px');
  //});
  it('should control CSS grid template areas', () => {
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    const layout = reduceLayout(props.layout);
    expect(style.gridTemplateAreas).toBe(layout.gridTemplateAreas)
  });
  it('should control CSS grid template axes', () => {
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    const template = reduceGridTemplate(props.grid);
    expect(style.gridTemplateRows).toBe(template.gridTemplateRows);
    expect(style.gridTemplateColumns).toBe(template.gridTemplateColumns);
  });
});
