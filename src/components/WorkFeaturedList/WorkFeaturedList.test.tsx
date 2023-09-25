import { render, screen } from '@testing-library/react';

import WorkFeaturedList from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const work = [
  {
    fields: {
      title: 'application 1',
      handle: 'application-1'
    }
  }
];

describe('WorkFeaturedList', () => {
  it('renders WorkFeaturedList component', () => {
    render(<WorkFeaturedList work={work} />);

    expect(screen.getByText('application 1')).toBeInTheDocument();
  });
});
