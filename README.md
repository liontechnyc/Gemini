# Gemini

![Gemini Logo](assets/logo.png)

> _An unobtrusive UI templating framework wrapping over CSS Grid/Flex optimized for minimal markup and responsive display._

### Summary

| Component            | Description                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **`<Block/>`**       | A container for wrapping design elements                                                                                            |
| **`<Collection/>`**  | 1-Dimensional Flex container to display item arrangements                                                                           |
| **`<Content/>`**     | A container for wrapping structured textual information                                                                             |
| **`<Design/>`**      | 2-Dimensional Flex container for templating UI designs                                                                              |
| **`<Image/>`**       | A container for wrapping images                                                                                                     |
| **`<Modal/>`**       | A container for wrapping overlays or popups                                                                                         |
| **`<Section/>`**     | An organizational unit for templating with `<Design/>`                                                                              |
| **`<UX.Provider/>`** | Root context provider                                                                                                               |
| **`<UX.View/>`**     | Handles responsive switching; essentially a wrapper for [`@artsy/fresnel's`](https://github.com/artsy/fresnel) `<Media/>` component |

### Usage

```typescript
/** src/index.tsx */
import React from "react";
import ReactDOM from "react-dom";
import { UX, Design, Section } from "@liontech/gemini";
import { DesignProps } from "@liontech/gemini/Design/Design.d";

const design: DesignProps = {
    layout: [
      ['brand', 'nav'],
      ['menu', 'content'],
      ['menu', 'footer'],
    ],
    grid: {
      x: [ 150, 'auto'],
      y: [
           72, 
           'auto', 
           72
        ],
    },
    gutter: 8
    ),
  };
};

const Page = (
  <UX.Provider>
  <Design is="page" containerStyle={{ height: 500 }}>
    <Section name="brand" containerStyle={{ background: "#0a122a" }} />
    <Section name="nav" containerStyle={{ background: "#3772ff" }} />
    <Section name="menu" containerStyle={{ background: "#fe5e41" }} />
    <Section name="content" containerStyle={{ background: "#e5ebea" }} />
    <Section name="footer" containerStyle={{ background: "#0a122a" }} />
  </Design>
  </UX.Provider>
);

ReactDOM.render(Page, document.getElementById('root'));
/// ....
```

```typescript
/** src/components/MessageList */
import React from "react";
import { Collection } from "@liontech/gemini";
import MessageBlock from "./MessageBlock";

const MessageList = ({ messages }) => {
  const messageItems = messages.map((content, id) => {
    return <MessageBlock key={id} {...{content}}>
  })
  return(
    <Collection
      containerStyle={{ outline: "1px solid black", borderRadius: 8 }}
      items={messageItems}
    />
  );
};

/// ....
```

## Development

Install application dependencies:

`npm install`

### Local Development

Develop the application locally with Storybook:

`npm run storybook`

## Quality Assurance

### Testing

Run integration and unit test:

`npm test`

Start test in watch mode:

`npm run test:watch`

### Code Coverage `TODO`

Generate a coverage report:

`npm run coverage`

### Code Formatting

Run TSLint and Prettier to analyze source code:

`npm run format`

## License

This project is licensed under the `GPLv2` License - see the [LICENSE.md](LICENSE.md) file for details
