import { render, screen } from '@testing-library/react';

import Transition from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Transition', () => {
  it('renders Transition component', () => {
    render(
      <Transition>
        <div>Transition this</div>
      </Transition>
    );

    expect(screen.getByText('Transition this')).toBeInTheDocument();
  });
});
