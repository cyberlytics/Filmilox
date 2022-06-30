import Divider from '@mui/material/Divider';

const Footer = () => {
    return (
        <div className="w-full flex justify-center pt-32">
            <div className="px-6 tablet:px-0">
                <p className="text-5xl font-bold mb-8">
                    Let's find your next{' '}
                    <span className="text-sky-600">movie</span>
                </p>

                <Divider className="w-full" />

                <div className="my-16">
                    <p className="dark-lay-grey text-sm">
                        {`© ${new Date().getFullYear()} Filmilox`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
