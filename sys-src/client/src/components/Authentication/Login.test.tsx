import { render } from '../../utils/test-utils';
import { fireEvent } from '@testing-library/react';
import Login from './Login';
import Backend from '../../api/Backend';

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

test('make fake login', async () => {
    try {
        await Backend.login({
            identifier: 'test',
            password: 'test',
        });
    } catch (e: any) {
        expect(e.message).toBe('Request failed with status code 400');
    }
});

test('make admin login', async () => {
    await Backend.login({
        identifier: 'admin',
        password: '!TjNL7(hmadc74~&',
    });
    expect(localStorage.getItem('token')).toBeDefined();
});
