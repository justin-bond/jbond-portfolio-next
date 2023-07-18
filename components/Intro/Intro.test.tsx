import { render, screen } from '@testing-library/react';

import Intro from '.';

describe('Intro', () => {
  it('renders Intro component', () => {
    const titleText = 'This is the title text';

    render(<Intro title={titleText} />);

    expect(screen.getByText(titleText)).toBeInTheDocument();
  });
});
