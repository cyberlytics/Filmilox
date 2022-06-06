import { render } from './test-utils';
import Login from '../components/Authentication/Login';

test('renders learn react link', () => {
    const { getByText } = render(<Login />);

    expect(getByText(/login/i, { selector: 'h1' })).toBeInTheDocument();
});
