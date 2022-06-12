import { render } from '../../utils/test-utils';
import { fireEvent } from '@testing-library/react';
import Login from './Login';

const setup = () => {
    const utils = render(<Login />);
    const emailInput = utils.getByLabelText(
        'Email / Username'
    ) as HTMLInputElement;
    const passwordInput = utils.getByLabelText('Password') as HTMLInputElement;
    const submitButton = utils.getByTestId('login-button');
    return {
        emailInput,
        passwordInput,
        submitButton,
        ...utils,
    };
};

test('renders login component', () => {
    const { getByText } = render(<Login />);
    expect(getByText(/login/i, { selector: 'h1' })).toBeInTheDocument();
});

test('It should change the email input', () => {
    const { emailInput, passwordInput, submitButton } = setup();
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    expect(emailInput.value).toBe('test@test.com');

    fireEvent.change(passwordInput, { target: { value: 'password1234' } });
    expect(passwordInput.value).toBe('password1234');
});
