import { render, screen } from '@testing-library/react';

import Reveal from '.';

describe('Reveal', () => {
  it('renders Reveal component', () => {
    render(
      <Reveal>
        <div>Reveal this</div>
      </Reveal>
    );

    expect(screen.getByText('Reveal this')).toBeInTheDocument();
  });
});
