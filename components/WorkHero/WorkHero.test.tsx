import { render, screen } from '@testing-library/react';

import WorkHero from '.';

// jest.mock('next/router', () => ({
//   useRouter: jest.fn()
// }));

describe('WorkHero', () => {
  it('renders WorkHero component', () => {
    render(<WorkHero slug="application-1" image="" video="" />);

    expect(screen.getByAltText('application-1')).toBeInTheDocument();
  });
});
