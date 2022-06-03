import { Card, IconButton, Rating } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IReviewGet } from '../model/IReview';
import { IUserVote, IVote } from '../model/IVote';
import { useAppSelector } from '../redux/hooks';
import { selectIsLoggedIn, selectUsername } from '../redux/userSlice';
import Backend from '../api/Backend';
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

interface Props {
    review: IReviewGet;
    setReviews: any;
    setMovie: any;
}

const Comment = (props: Props) => {
    const {review, setReviews, setMovie} = props;
    const userName = useAppSelector(selectUsername);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const [vote, setVote] = useState<IVote | undefined>();
    const [userVote, setUserVote] = useState<IUserVote>();

    useEffect(() => {
        Backend.getVotes(review._id)
               .then((response: AxiosResponse<IVote>) => {setVote(response.data); console.log(response.data)});
    }, [userVote]);

    useEffect(() => {
        if (isLoggedIn) {
            Backend.getExistingUserVote(review._id)
                .then((response: AxiosResponse<IUserVote>) => {setUserVote(response.data)} )
        }
    },[])

    const handleDelete = async () => {
        try {
            await Backend.deleteReview(review._id, setReviews, setMovie);
        } catch (e) {
            console.log(e);
        }
    };

    async function handleVote(isUpvote: boolean) {
        try {
            setUserVote({userVote: isUpvote});
            await Backend.vote(review._id, isUpvote);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="m-4 w-full px-6">
            <Card className="w-full">
                <div className="p-6">
                    <div className="flex flex-col tablet:justify-between tablet:flex-row">
                        <div className="flex items-center justify-between">
                            <p className="mr-4 text-xl text-gray-500 font-bold">
                                @{review.user.username}
                            </p>
                            <Rating
                                name="customized-10"
                                readOnly
                                defaultValue={review.rating}
                                max={10}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-xl text-gray-500 font-bold mr-2">
                                {new Date(
                                    review.createdAt
                                ).toLocaleDateString()}
                            </p>
                            {userName === review.user.username && (
                                <IconButton
                                    onClick={handleDelete}
                                    color="error"
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col tablet:flex-row">
                        <p className="mr-8">{review.comment}</p>
                        <div style={{flexGrow: 1}}/>
                        <div className="flex justify-end tablet:items-end">
                            <div className="flex-col flex justify-center items-center">
                                <IconButton color={ userVote?.userVote === true ? 'primary' : 'default'} onClick={() => {
                                    handleVote(true)
                                }}>
                                    <ThumbUpIcon/>
                                </IconButton>
                                <p>{vote && vote.upvote}</p>
                                <p>{!vote && '--'}</p>
                            </div>

                            <div className="flex-col flex justify-center items-center">
                                <IconButton color={ userVote?.userVote === false ? 'error' : 'default'}  onClick={() => {
                                    handleVote(false)
                                }}>
                                    <ThumbDownIcon/>
                                </IconButton>
                                <p>{vote && vote.downvote}</p>
                                <p>{!vote && '--'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Comment;
