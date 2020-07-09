import React, { createElement } from 'react';

export interface BlockProps {
  renderAs?: React.ElementType;
  fluid?: boolean;
  centered?: boolean;
  isBlockLike?: boolean;
  inline?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Block = ({
  renderAs,
  fluid,
  centered,
  isBlockLike,
  inline,
  className,
  style,
  children,
}: BlockProps) => {
  const wrapperStyle: React.CSSProperties = {
    display: isBlockLike
      ? inline
        ? 'inline-block'
        : 'block'
      : inline // ? default behavior is flex
      ? 'inline-flex'
      : 'flex',
    flex: Number(fluid) || undefined,
    justifyContent: centered ? 'center' : undefined,
    alignItems: centered ? 'center' : undefined,
    margin: isBlockLike && centered ? '0 auto' : undefined,
  };
  return createElement(
    renderAs || 'div',
    { className, style: { ...wrapperStyle, ...style } },
    children
  );
};

export default Block;
