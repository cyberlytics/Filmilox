import { Card, IconButton, Rating } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { IReviewGet } from '../model/IReview';
import { IVote } from '../model/IVote';

// const data = {
//     userName: '@Arina',
//     rating: 7.5,
//     comment:
//         'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
//     date: format(new Date(), 'dd.MM.yyyy'),
//     like: 0,
//     dislike: 0,
// };

interface Props {
    review: IReviewGet;
}

export default function Comment(props: Props) {
    const { review } = props;

    //TODO
    const vote: IVote = { like: 1337, dislike: 69 }; // get vote by review.id

    return (
        <Card sx={{ maxWidth: 1280 }} className="m-4">
            <div className="p-6">
                <div className="flex flex-col tablet:justify-between tablet:flex-row">
                    <div className="flex items-center justify-between">
                        <p className="mr-4 text-xl text-gray-500 font-bold">
                            {review.userId}
                        </p>
                        <Rating
                            name="customized-10"
                            defaultValue={review.rating}
                            max={10}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-xl text-gray-500 font-bold mr-2">
                            {review.timestamp?.toString()}
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
}
