import { render, screen } from '@testing-library/react';

import Header from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Header', () => {
  it('renders Header component', () => {
    render(<Header />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
