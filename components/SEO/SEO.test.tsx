import { render, screen } from '@testing-library/react';

import SEO from '.';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    }
  };
});

describe('SEO', () => {
  it('renders SEO component', () => {
    const metaTitle = 'this is the title';
    render(<SEO metaTitle={metaTitle} />, {
      container: document.head
    });

    expect(document.title).toBe(metaTitle);
  });
});
