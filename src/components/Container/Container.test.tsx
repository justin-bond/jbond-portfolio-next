import { render, screen } from '@testing-library/react';

import Container from '.';

describe('Container', () => {
  it('renders Container component', () => {
    render(<Container>contents</Container>);

    expect(screen.getByText('contents')).toBeInTheDocument();
  });
});
