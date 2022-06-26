import Admin from './Admin';
import { fireEvent, render } from '../utils/test-utils';

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

    test('Tests validation with empty inputs.', () => {
        const { getByTestId } = render(<Admin />);

        const addMovieBtn = getByTestId('addMovieBtn');
        const titleInput = getByTestId('titleInput').querySelector('div');
        const descriptionInput =
            getByTestId('descriptionInput').querySelector('div');
        const linkInput = getByTestId('linkInput').querySelector('div');

        fireEvent.click(addMovieBtn);

        expect(titleInput?.querySelector('input')).toHaveAttribute(
            'aria-invalid',
            'true'
        );
        expect(titleInput).toHaveClass('Mui-error');

        expect(descriptionInput?.querySelector('textarea')).toHaveAttribute(
            'aria-invalid',
            'true'
        );
        expect(descriptionInput).toHaveClass('Mui-error');

        expect(linkInput?.querySelector('input')).toHaveAttribute(
            'aria-invalid',
            'true'
        );
        expect(linkInput).toHaveClass('Mui-error');
    });
});
