import { render, screen } from '@testing-library/react';

import WorkOtherList from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const work = [
  {
    fields: {
      title: 'application 1',
      handle: 'application-1'
    }
  }
];

describe('WorkOtherList', () => {
  it('renders WorkOtherList component', () => {
    render(<WorkOtherList work={work} />);

    expect(screen.getByText('application 1')).toBeInTheDocument();
  });
});
