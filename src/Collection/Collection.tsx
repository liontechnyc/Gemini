import React, { createElement, cloneElement } from 'react';

export type CollectionDirection = 'vertical' | 'horizontal';

export type CollectionAlignment = {
  horizontal?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'around'
    | 'evenly';
  vertical?: 'start' | 'end' | 'center' | 'stretch';
  content?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'around';
};

export interface CollectionProps {
  fluid?: boolean;
  renderAs?: React.ElementType;
  direction: CollectionDirection;
  reverse?: boolean;
  align?: CollectionAlignment;
  items?: React.ReactElement[];
  containerClass?: string;
  containerStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  itemClass?: string;
  emptyState?: React.ReactElement;
}

function mapDirectionToFlex(
  direction: CollectionDirection,
  reverse: boolean
): { flexDirection: string } {
  let orientation = 'column';
  if (direction === 'horizontal') {
    orientation = 'row';
  }
  return {
    flexDirection: reverse ? orientation + '-reverse' : orientation,
  };
}

function mapAlignToFlex(
  align: CollectionAlignment,
  direction: CollectionDirection
): {
  justifyContent: string;
  alignItems: string;
  alignContent: string | undefined;
} {
  return align
    ? {
        // ? flip align axes based on direction
        justifyContent:
          (direction === 'horizontal'
            ? align.horizontal
            : align.vertical) || 'start',
        alignItems:
          (direction === 'horizontal'
            ? align.vertical
            : align.horizontal) || 'start',
        alignContent: align.content || undefined,
      }
    : {
        justifyContent: 'start',
        alignItems: 'start',
        alignContent: 'start',
      };
}

/** 1-Dimensional Flex container to display item arrangements */
const Collection = ({
  renderAs,
  fluid,
  direction,
  align,
  reverse,
  items,
  containerStyle,
  containerClass,
  itemStyle,
  itemClass,
  emptyState,
}: CollectionProps) => {
  const wrapperStyle = {
    display: 'flex',
    flex: Number(fluid) || undefined,
    ...mapDirectionToFlex(direction, !!reverse),
    ...mapAlignToFlex(align as CollectionAlignment, direction),
    ...containerStyle,
  };
  if (items instanceof Array) {
    if (items.length > 0) {
      return createElement(
        renderAs || 'div',
        { style: wrapperStyle, className: containerClass },
        items.map((item, id) => (
          <div style={itemStyle} className={itemClass} key={id}>
            {item}
          </div>
        ))
      );
    }
  }
  return emptyState || <></>;
};

export default Collection;
