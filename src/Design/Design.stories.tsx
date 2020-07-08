import React from 'react';
import Design, { DesignProps } from './Design';
import Section from '../Section/Section';

export default {
  title: 'Design',
  component: Design,
};

function mockProps(): DesignProps {
  return {
    containerStyle: {
      height: 500,
    },
    layout: [
      ['brand', 'nav'],
      ['menu', 'content'],
      ['menu', 'footer'],
    ],
    grid: {
      x: [150, 'auto'],
      y: [72, 'auto', 72],
    },
    gutter: 8,
    children: (
      <>
        <Section name="brand" containerStyle={{ background: '#0a122a' }} />
        <Section name="nav" containerStyle={{ background: '#3772ff' }} />
        <Section name="menu" containerStyle={{ background: '#fe5e41' }} />
        <Section name="content" containerStyle={{ background: '#e5ebea' }} />
        <Section name="footer" containerStyle={{ background: '#0a122a' }} />
      </>
    ),
  };
}

export const DashboardExample = () => <Design {...mockProps()} />;
