import Admin from './Admin';
import { render, screen } from '../utils/test-utils';

test('Admin component test. Tests if all necessary inputs/buttons are present.', () => {
    const { getByText } = render(<Admin />);

    const heading = getByText(/film hinzufügen:/i, { selector: 'h1' });
    expect(heading).toBeInTheDocument();

    const titleInput = screen.getByRole('titleInput');
    expect(titleInput).toHaveTextContent('Titel');

    const descriptionInput = screen.getByRole('descriptionInput');
    expect(descriptionInput).toHaveTextContent('Beschreibung');

    const dateInput = screen.getByRole('datePicker');
    expect(dateInput).toHaveTextContent('Erscheinungsdatum');

    const trailerInput = screen.getByRole('linkInput');
    expect(trailerInput).toHaveTextContent('Trailer-Link');

    const addImgBtn = screen.getByText(/bild hinzufügen/i);
    expect(addImgBtn).toBeInTheDocument();

    const addMovieBtn = screen.getByRole('addMovieBtn');
    expect(addMovieBtn).toBeInTheDocument();

    const cancelBtn = screen.getByText(/abbrechen/i);
    expect(cancelBtn).toBeInTheDocument();
});
