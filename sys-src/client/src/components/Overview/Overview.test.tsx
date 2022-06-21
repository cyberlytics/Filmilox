import { render, screen } from '../../utils/test-utils';
import Overview from './Overview';

const Wrapper = () => {
    return <Overview />;
};

describe('Test MovieCard Component', () => {
    test('check UI elements', () => {
        render(<Wrapper />);

        //check empty main overview
        const mainDiv = screen.getByTestId('overview-main');
        expect(mainDiv).toBeInTheDocument();
        expect(mainDiv.textContent).toBe('');
    });
});
