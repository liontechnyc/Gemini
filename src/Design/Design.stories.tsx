import React from 'react';
import Design, { DesignProps } from './Design';
import Section from './Section';

export default {
  title: 'Design',
  component: Design,
};

function mockProps(): DesignProps {
  return {
    containerStyle: {
      height: 500,
      width: '100%',
    },
    layout: [
      ['menu', 'nav'],
      ['menu', 'content'],
      ['menu', 'footer'],
    ],
    grid: {
      x: ['0.15fr', 'auto'],
      y: [72, 'auto', 100],
    },
    gutter: 8,
    children: (
      <>
        <Section name="nav" containerStyle={{ background: '#3772ff' }} />
        <Section name="menu" containerStyle={{ background: '#fe5e41' }} />
        <Section name="content" containerStyle={{ background: '#e5ebea' }} />
        <Section name="footer" containerStyle={{ background: '#0a122a' }} />
      </>
    ),
  };
}

export const DashboardExample = () => <Design {...mockProps()} />;
