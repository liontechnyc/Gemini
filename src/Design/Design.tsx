import React from 'react';
import styled from 'styled-components';

export type DesignLayoutTemplate = string[][];

export type DesignLayout = DesignLayoutTemplate;

export interface DesignGridAxis {
  x: (number | string)[];
  y: (number | string)[];
}

export type DesignViewType = 'page' | 'ui';

export interface DesignProps {
  layout: DesignLayout;
  grid: DesignGridAxis;
  gutter?: number | string;
  is?: DesignViewType;
  noHorizontalScroll?: boolean;
  noVerticalScroll?: boolean;
  containerClass?: string;
  containerStyle?: React.CSSProperties;
  children?: React.ReactNode | React.ElementType;
}

/** Reduce template structure into CSS valid template syntax */
export function reduceLayout(
  layout: DesignLayoutTemplate
): { gridTemplateAreas: string } {
  const templateAreas: string = layout.reduce(
    (template: string, layoutRow: string[], cur: number) => {
      return (
        template + `'` +
        layoutRow.map((elementName) => `${elementName}`).join(' ') +
        `'${cur < layout.length - 1 ? ' ' : ''}`
      );
    },
    ``
  );
  return { gridTemplateAreas: templateAreas };
}

/** Reduce grid axis into CSS valid template syntax */
export function reduceGridTemplate(
  grid: DesignGridAxis
): { gridTemplateRows: string; gridTemplateColumns: string } {
  const format = (axis: (number | string)[]) =>
    axis
      .map((t) => {
        return isNaN(t as number) ? t : (t as string) + 'px';
      })
      .join(' ');
  return {
    gridTemplateRows: format(grid.y),
    gridTemplateColumns: format(grid.x),
  };
}

/** Responsive 2-dimensional container */
const Design = ({
  layout,
  grid,
  is,
  gutter,
  noHorizontalScroll,
  noVerticalScroll,
  containerClass,
  containerStyle,
  children,
}: DesignProps) => {
  const DesignContainer = styled.main({
    display: 'grid',
    width: is ? '100vw' : undefined,
    minHeight: is ? '100vh' : undefined,
    maxHeight: is === 'ui' ? '100vh' : undefined,
    overflowY: (is === 'ui' && 'hidden') || (noVerticalScroll ? 'hidden' : 'auto'),
    overflowX: noHorizontalScroll ? 'hidden' : 'auto',
  });
  const designStyle: React.CSSProperties = {
    ...reduceLayout(layout as DesignLayoutTemplate),
    ...reduceGridTemplate(grid as DesignGridAxis),
    gridGap: gutter ? gutter : undefined
  };
  return (
    <DesignContainer
      className={containerClass}
      style={{ ...designStyle, ...containerStyle }}
    >
      {children}
    </DesignContainer>
  );
};

export const withDesign = (
  layout: DesignLayout,
  grid: DesignGridAxis,
  containerStyle: React.CSSProperties
) => (Component: React.ComponentType) => (props: React.Props<any>) => {
  return (
    <Design {...{ containerStyle, layout, grid }}>
      <Component {...props} />
    </Design>
  );
};

export default Design;
