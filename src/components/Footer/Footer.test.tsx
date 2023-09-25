import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('Footer', () => {
  it('renders Footer component', () => {
    render(<Footer />);

    expect(screen.getByText(/Justin Bond/)).toBeInTheDocument();
  });
});
