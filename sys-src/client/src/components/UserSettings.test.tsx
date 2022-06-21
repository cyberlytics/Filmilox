import UserSettings from './UserSettings';
import { render, screen } from '../utils/test-utils';
import { IUser } from '../model/IUser';

describe('UserSettings component Unit Test', () => {
    test('test if all the UI is present', () => {
        const { getByTestId } = render(<UserSettings />);

        const mainDiv = screen.getByTestId('usersettings-main');
        expect(mainDiv).toBeInTheDocument();

        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();

        const label = screen.getByTestId('label');
        expect(label).toBeInTheDocument();

        const badge = screen.getByTestId('badge');
        expect(badge).toBeInTheDocument();

        const editicon = screen.getByTestId('editicon');
        expect(editicon).toBeInTheDocument();

        /*const pictureAvatar = screen.getByTestId('pictureAvatar');
        expect(pictureAvatar).toBeInTheDocument();*/

        const textAvatar = screen.getByTestId('textAvatar');
        expect(textAvatar).toBeInTheDocument();

        const avatarInput = screen.getByTestId('avatarInput');
        expect(avatarInput).toBeInTheDocument();

        const accountDetailsDiv = screen.getByTestId('accountDetailsDiv');
        expect(accountDetailsDiv).toBeInTheDocument();

        const saveButton = screen.getByTestId('saveButton');
        expect(saveButton).toBeInTheDocument();
    });
});
