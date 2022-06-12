import { render } from '../../utils/test-utils';
import { fireEvent } from '@testing-library/react';
import Registration from './Registration';

const setup = () => {
    const utils = render(<Registration />);
    const emailInput = utils.getByLabelText('E-mail') as HTMLInputElement;
    const passwordInput = utils.getByLabelText('Password') as HTMLInputElement;
    const userNameInput = utils.getByLabelText('Username') as HTMLInputElement;
    return {
        emailInput,
        passwordInput,
        userNameInput,
        ...utils,
    };
};

test('renders Registration component', () => {
    const { getByText } = render(<Registration />);
    expect(getByText(/Register/i, { selector: 'h1' })).toBeInTheDocument();
});

test('It should change the email/username input', () => {
    const { emailInput, passwordInput, userNameInput } = setup();
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    expect(emailInput.value).toBe('test@test.com');

    fireEvent.change(passwordInput, { target: { value: 'password1234' } });
    expect(passwordInput.value).toBe('password1234');

    fireEvent.change(userNameInput, { target: { value: 'username' } });
    expect(userNameInput.value).toBe('username');
});
