declare module '*.md' {
  // "unknown" would be more detailed depends on how you structure frontmatter
  const attributes: {
    title: string;
    date: string;
    summary?: string;
    tags: string[];
  }; 

  // When "Mode.HTML" is requested
  const html: string;

  // When "Mode.MARKDOWN" is requested
  const markdown: string;

  // When "Mode.React" is requested. VFC could take a generic like React.VFC<{ MyComponent: TypeOfMyComponent }>
  import React from 'react';
  const ReactComponent: React.VFC;
  
  // Modify below per your usage
  export { attributes, html, markdown, ReactComponent };
}
