import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Content, { ContentProps } from './Content';

describe('Section', () => {
  let props: ContentProps;

  beforeEach(() => {
    props = {
      title: 'Title',
      description: 'Description',
      subtitle: 'Subtitle',
      titleClass: 'content__title',
      contentClass: 'content__description'
    };
  });

  const renderComponent = () => render(<Content {...props} />);
  it('should display as a CSS block', () => {
    const { container } = renderComponent();
    const style = window.getComputedStyle(container.firstElementChild);
    expect(style.display).toBe('block');
  })
  it('should inject content into container', () => {
    const { getByText } = renderComponent();
    expect(getByText(props.title).nodeName).toBe('H3')
    expect(getByText(props.subtitle).nodeName).toBe('EM')
    expect(getByText(props.description).nodeName).toBe('P')
  });
  it('should control text alignment', () => {
    props.alignTitle = 'center';
    props.alignContent = 'center';
    const { container, getByText } = renderComponent();
    const titleStyle = window.getComputedStyle(getByText(props.title));
    const contentStyle = window.getComputedStyle(container.firstElementChild.querySelector('div > div'));
    expect(titleStyle.textAlign).toBe(props.alignTitle);
    expect(contentStyle.textAlign).toBe(props.alignContent);
  });
  it('should inject classnames on title and content', () => {
    const { container, getByText } = renderComponent();
    const titleContainer = getByText(props.title);
    const contentContainer = container.firstElementChild.querySelector('div > div');
    expect(titleContainer.classList).toContain(
      props.titleClass
    );
    expect(contentContainer.classList).toContain(
      props.contentClass
    );
  })
});
