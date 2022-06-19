import { render } from '../../utils/test-utils';
import { fireEvent } from '@testing-library/react';
import Login from './Login';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.post.mockResolvedValue({
    data: { token: 'token-received' },
});

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

describe('login', () => {
    afterEach(jest.clearAllMocks);
    test('It should change the email, password input ans success login', async () => {
        const { emailInput, passwordInput, submitButton } = setup();

        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        expect(emailInput.value).toBe('test@test.com');

        fireEvent.change(passwordInput, { target: { value: 'password1234' } });
        expect(passwordInput.value).toBe('password1234');

        fireEvent.click(submitButton);

        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });
});
