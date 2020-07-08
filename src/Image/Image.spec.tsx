import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Image, { ImageProps } from './Image';

describe('Image', () => {
  let props: ImageProps;

  beforeEach(() => {
    props = {
      src: '/test.jpeg',
      defaultImg: '/test.jpg',
      caption: 'Example caption',
      alt: 'Image alt text'
    };
  });

  const renderComponent = () => render(<Image {...props} />);

  it('should wrap image in a figure', () => {
    const { container } = renderComponent();
    expect(container.firstElementChild.nodeName).toBe('FIGURE');
    expect(container.firstElementChild.querySelector('img')).toBeTruthy();
  });
});
