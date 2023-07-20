import { render, screen } from '@testing-library/react';

import Contact from '.';

describe('Contact', () => {
  it('renders Contact component', () => {
    render(<Contact />);

    expect(screen.getByText('Lets Talk')).toBeInTheDocument();
  });
});
