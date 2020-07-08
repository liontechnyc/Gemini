import React from 'react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Image',
  component: Image,
};

function mockProps(img: string, width?: number, height?: number, square?: boolean): ImageProps{
  return {
    src: img,
    defaultImg: img,
    width,
    height,
    square,
    alt: 'placeholder',
    caption: 'Image caption'
  }
}

export const StaticImage = () => <Image {...mockProps(`https://via.placeholder.com/256x256`, 256, 256)} />

export const ResponsiveImage = () => <Image {...mockProps(`https://via.placeholder.com/300x200`)}/>

export const SquareImage = () => <Image {...mockProps(`https://via.placeholder.com/800x800`, undefined, undefined, true)}/>