import { fireEvent, render, screen } from '@testing-library/react';

import WorkHero from '.';

// jest.mock('next/router', () => ({
//   useRouter: jest.fn()
// }));

describe('WorkHero', () => {
  it('renders WorkHero component', () => {
    render(<WorkHero slug="application-1" image="" video="" />);

    expect(screen.getByAltText('application-1')).toBeInTheDocument();
  });

  it('renders WorkHero component with video', () => {
    render(
      <WorkHero
        slug="application-1"
        image=""
        video="https://www.youtube.com/watch?v=jfKfPfyJRdk"
      />
    );

    expect(screen.getByText('Click to Play')).toBeInTheDocument();
  });

  it('renders WorkHero component with video and click', () => {
    render(
      <WorkHero
        slug="application-1"
        image=""
        video="https://www.youtube.com/watch?v=jfKfPfyJRdk"
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Exit Video')).toBeInTheDocument();
  });
});
