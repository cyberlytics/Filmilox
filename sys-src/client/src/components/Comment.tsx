import { Card, IconButton, Rating } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IReviewGet } from '../model/IReview';
import { IVote } from '../model/IVote';
import Backend from '../api/Backend';
import { useEffect, useState } from 'react';

interface Props {
    review: IReviewGet;
}

const Comment = (props: Props) => {
    const { review } = props;
    const [username, setUsername] = useState<string>('');

    //TODO
    // get vote by review.id
    const vote: IVote = { like: 1337, dislike: 69 };

    useEffect(() => {
        const getUsername = async (userId: string) => {
            const name = await Backend.getUsername({
                userId: userId,
            });
            setUsername(name);
        };
        getUsername(review.userId);
    }, [review]);

    return (
        <Card sx={{ width: 1280 }} className="m-4">
            <div className="p-6">
                <div className="flex flex-col tablet:justify-between tablet:flex-row">
                    <div className="flex items-center justify-between">
                        <p className="mr-4 text-xl text-gray-500 font-bold">
                            @{username}
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
                            {review.createdAt?.toLocaleDateString()}
                        </p>
                        <div className="">
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                            <IconButton color="error">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col tablet:flex-row">
                    <p className="mr-8">{review.comment}</p>
                    <div style={{ flexGrow: 1 }} />
                    <div className="flex justify-end tablet:items-end">
                        <div className="flex-col flex justify-center items-center">
                            <IconButton>
                                <ThumbUpIcon />
                            </IconButton>
                            <p>{vote.like}</p>
                        </div>

                        <div className="flex-col flex justify-center items-center">
                            <IconButton color="error">
                                <ThumbDownIcon />
                            </IconButton>
                            <p>{vote.dislike}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Comment;
