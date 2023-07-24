import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Contact from '.';

describe('Contact', () => {
  const user = userEvent.setup();
  it('renders Contact component', async () => {
    const information = {
      name: 'justin',
      email: 'hello@hello.com',
      phone: '1234567899',
      message: 'this is a test message'
    };

    let nameTextBox;
    let emailTextBox;
    let phoneTextBox;
    let messageTextBox;

    const setup = () => {
      render(<Contact />);
      nameTextBox = screen.getByRole('textbox', {
        name: 'formName'
      });
      emailTextBox = screen.getByRole('textbox', {
        name: 'formEmail'
      });
      phoneTextBox = screen.getByRole('textbox', {
        name: 'formPhone'
      });
      messageTextBox = screen.getByRole('textbox', {
        name: 'formMessage'
      });
      fireEvent.change(nameTextBox, { target: { value: information.name } });
      fireEvent.change(emailTextBox, { target: { value: information.email } });
      fireEvent.change(phoneTextBox, { target: { value: information.phone } });
      fireEvent.change(messageTextBox, {
        target: { value: information.message }
      });
    };

    setup();

    expect(screen.getByText('Lets Talk')).toBeInTheDocument();
    expect(nameTextBox).toHaveValue(information.name);
    expect(emailTextBox).toHaveValue(information.email);
    expect(phoneTextBox).toHaveValue(information.phone);
    expect(messageTextBox).toHaveValue(information.message);

    // await user.click(screen.getByRole('button', { name: 'Submit Message' }));
  });
});
