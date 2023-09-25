import { fireEvent, render, screen } from '@testing-library/react';

import SmartLink from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('SmartLink', () => {
  it('renders SmartLink component', () => {
    render(<SmartLink href="/">Click Me</SmartLink>);

    const link = screen.getByRole('link', { name: 'Click Me' });

    fireEvent.click(link);
    expect(link).toHaveAttribute('href', '/');
  });
});
