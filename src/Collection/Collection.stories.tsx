import React from 'react';
import Collection, {
  CollectionProps,
  CollectionDirection,
  CollectionAlignment,
} from './Collection';

export default {
  title: 'Collection',
  component: Collection
};

function mockProps(
  direction: CollectionDirection,
  align?: CollectionAlignment,
  reverse?: boolean
): CollectionProps {
  return {
    direction,
    align,
    reverse,
    containerStyle: {
      background: '#fefefe',
      border: '1px solid #333',
      borderRadius: 4,
      padding: 8,
    },
    itemStyle: {
      display: 'flex',
      width: 100,
      height: 100,
      background: '#fff',
      border: '1px #333 solid',
      borderRadius: 4,
      margin: 8,
      justifyContent: 'center',
      alignItems: 'center',
      color: '#333',
    },
    items: [<div children="A" />, <div children="B" />, <div children="C" />],
  };
}

export const Horizontal = () => <Collection {...mockProps('horizontal')} />;

export const WithSpaceBetween = () => (
  <Collection {...mockProps('horizontal', { horizontal: 'space-between' })} />
);

export const WithHorizontalAlignCenter = () => (
  <Collection {...mockProps('horizontal', { horizontal: 'center' })} />
);

export const WithHorizontalReverseItems = () => (
  <Collection {...mockProps('vertical', { horizontal: 'center' }, true)} />
);

export const Vertical = () => <Collection {...mockProps('vertical')} />;

export const WithVerticalAlignCenter = () => (
  <Collection {...mockProps('vertical', { horizontal: 'center' })} />
);

export const WithVerticalReverseItems = () => (
  <Collection {...mockProps('vertical', { horizontal: 'center' }, true)} />
);
