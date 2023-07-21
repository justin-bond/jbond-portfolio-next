import { render, screen } from '@testing-library/react';

import Nav from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Nav', () => {
  it('renders Nav component', () => {
    render(<Nav />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
