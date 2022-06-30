import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center w-full mt-8 pb-8 pt-20">
                <div className="max-w-xl laptop:max-w-4xl w-full pl-6 flex flex-col tablet:pl-6 laptop:pl-0">
                    <div className="flex font-bold pt-8 laptop:hidden">
                        <div className="flex">
                            <h3 className="dark-lay-grey text-3xl tablet:text-5xl">
                                Let's find your next
                            </h3>
                            <h3 className="text-3xl tablet:text-5xl text-sky-600">
                                &nbsp;movie
                            </h3>
                        </div>
                    </div>
                    <div className="w-full tablet:flex laptop:justify-between mb-16">
                        <div>
                            <div className="flex font-bold pt-8 hidden laptop:flex">
                                <div className="flex">
                                    <h3 className="dark-lay-grey text-5xl">
                                        Let's find your next
                                    </h3>
                                    <h3 className="text-5xl text-sky-600">
                                        &nbsp;movie
                                    </h3>
                                </div>
                            </div>
                            <div className="w-full mt-8">
                                <h3 className="dark-lay-grey font-bold mb-2">
                                    Services
                                </h3>
                                <div className="flex flex-col laptop:flex-row">
                                    <div className="text-gray-500 text-md font-medium mr-16">
                                        <Link to={'/login'}>
                                            <p className="py-1 tablet:py-0">
                                                Login
                                            </p>
                                        </Link>
                                        <Link to={'/register'}>
                                            <p className="py-1 tablet:py-0">
                                                Register
                                            </p>
                                        </Link>
                                        <p className="py-1 tablet:py-0">
                                            Add Review
                                        </p>
                                        <p className="py-1 tablet:py-0">
                                            Add Comment
                                        </p>
                                        <p className="py-1 tablet:py-0">
                                            Like or Dislike a Review
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="dark-lay-grey font-bold">Company</h3>
                            <div className="flex flex-col">
                                <div className="text-gray-500 text-md font-medium">
                                    <p className="py-1 tablet:py-0">Kontakt</p>
                                    <p className="py-1 tablet:py-0">AGB</p>
                                    <p className="py-1 tablet:py-0">
                                        Privacy Policy
                                    </p>
                                    <p className="py-1 tablet:py-0">
                                        Terms & Conditions
                                    </p>
                                </div>
                                <div className="text-gray-500 text-md font-medium mt-4">
                                    <h3 className="dark-lay-grey font-bold">
                                        Sociale Medien
                                    </h3>
                                    <p className="py-1 tablet:py-0">Twitter</p>
                                    <p className="py-1 tablet:py-0">Facebook</p>
                                    <p className="py-1 tablet:py-0">
                                        Instagram
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider className="w-full" />

                    <div className="my-16">
                        <p className="dark-lay-grey text-sm">
                            {`© ${new Date().getFullYear()} Filmilox`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
