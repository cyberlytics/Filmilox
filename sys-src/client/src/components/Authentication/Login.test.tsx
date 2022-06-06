import { render } from '../../utils/test-utils';
import Login from './Login';

test('renders learn react link', () => {
    const { getByText } = render(<Login />);

    expect(getByText(/login/i, { selector: 'h1' })).toBeInTheDocument();
});
