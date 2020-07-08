import React from 'react';
import Content, { ContentProps } from './Content';

export default {
  title: 'Content',
  component: Content,
};

function mockProps(): ContentProps{
  return {
    title: `Who Am I`,
    description: `One must shed the bad taste of wanting to agree with many. "Good" is no longer good when one's neighbor mouths it. And how should there be a "common good"! The term contradicts itself: whatever can be common always has little value. In the end it must be as it is and always has been: great things remain for the great, abysses for the profound, nuances and shudders for the refined, and, in brief, all that is rare for the rare.`
  }
}

export const ExampleContent = () => <Content {...mockProps()}/>