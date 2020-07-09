import React from 'react';
import Block, { BlockProps } from './Block';
import Content from '../Content/Content';

export default {
  title: 'Block',
  component: Block,
};

function mockProps(): BlockProps {
  return {
    centered: true,
    children: (
      <>
        <Content title="My Block" description="Here is some content" />
      </>
    ),
  };
}

export const ExampleBlock = () => <Block {...mockProps()} />;
