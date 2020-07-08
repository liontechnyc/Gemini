import React from 'react';
import styled from 'styled-components';

export interface ImageProps {
  src?: string;
  defaultImg: string;
  square?: boolean;
  width?: number;
  height?: number;
  alt?: string;
  caption?: string;
  children?: React.ReactNode;
}

const Image = ({
  src,
  defaultImg,
  square,
  width,
  height,
  caption,
  children,
}: ImageProps) => {
  const ImageContainer = styled.figure`
    display: block;
    position: relative;
  `;
  const ImageWrapper = styled.img`
    display: block;
    position: relative;
  `;
  const imageStyle = {
    width: width ? width + 'px' : '100%',
    height: square ? '100%' : height || 'auto',
  };
  return src ? (
    <ImageContainer>
      <ImageWrapper
        style={imageStyle}
        {...{ src, height, width }}
      />
      <figcaption>{caption ? <p>{caption}</p> : children}</figcaption>
    </ImageContainer>
  ) : (
    <ImageContainer>
      <ImageWrapper
        src={defaultImg}
        style={imageStyle}
        {...{ height, width }}
      />
      <figcaption>{caption ? <p>{caption}</p> : children}</figcaption>
    </ImageContainer>
  );
};

export default Image;
