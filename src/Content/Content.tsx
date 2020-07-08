import React from 'react';

export type ContentAlignmentType = 'left' | 'center' | 'right';

export interface ContentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  titleClass?: string;
  alignTitle?: ContentAlignmentType;
  alignContent?: ContentAlignmentType;
  containerClass?: string;
  contentClass?: string;
  containerStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Content = ({
  title,
  subtitle,
  description,
  alignTitle,
  alignContent,
  titleClass,
  contentClass,
  containerClass,
  containerStyle,
  children,
}: ContentProps) => {
  const wrapperStyle: React.CSSProperties = {
    display: 'block',
    ...containerStyle,
  };
  const titleStyle: React.CSSProperties = {
    textAlign: alignTitle || 'left',
  };
  const contentStyle: React.CSSProperties = {
    textAlign: alignContent || 'left',
  };
  return (
    <div className={containerClass} style={wrapperStyle}>
      {title && (
        <>
          <h3 style={titleStyle} className={titleClass}>
            {title}
          </h3>
          {subtitle && <em>{subtitle}</em>}
        </>
      )}
      <div className={contentClass} style={contentStyle}>
        {description ? <p>{description}</p> : children}
      </div>
    </div>
  );
};

export default Content;
