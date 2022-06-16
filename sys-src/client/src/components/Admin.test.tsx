import Admin from './Admin';
import { fireEvent, render, screen } from '../utils/test-utils';
import { debug } from 'console';

describe('Test Admin component', () => {
    test('Tests if all necessary inputs/buttons (UI) are present.', () => {
        const { getByTestId } = render(<Admin />);

        const heading = getByTestId('heading');
        expect(heading).toBeInTheDocument();

        const titleInput = getByTestId('titleInput');
        expect(titleInput).toHaveTextContent('Titel');

        const descriptionInput = getByTestId('descriptionInput');
        expect(descriptionInput).toHaveTextContent('Beschreibung');

        const dateInput = getByTestId('datePicker');
        expect(dateInput).toHaveTextContent('Erscheinungsdatum');

        const trailerInput = getByTestId('linkInput');
        expect(trailerInput).toHaveTextContent('Trailer-Link');

        const addImgBtn = getByTestId('addImgButton');
        expect(addImgBtn).toBeInTheDocument();

        const addMovieBtn = getByTestId('addMovieBtn');
        expect(addMovieBtn).toBeInTheDocument();

        const cancelBtn = getByTestId('cancelBtn');
        expect(cancelBtn).toBeInTheDocument();
    });

    test('Tests validation.', () => {
        const { getByTestId } = render(<Admin />);

        const addImgBtn = getByTestId('addImgButton');
        const titleInput = getByTestId('titleInput');

        fireEvent.click(addImgBtn);

        expect(titleInput).toHaveClass('Mui-error');
    });
});
