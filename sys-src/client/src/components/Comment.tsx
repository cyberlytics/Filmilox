import React, { useState } from 'react';
import { Card, Grid, IconButton, Rating } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { format } from 'date-fns';

const data = {
    userName: '@Arina',
    rating: 7.5,
    comment:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    date: format(new Date(), 'dd.MM.yyyy'),
    like: 0,
    dislike: 0,
};

export default function Comment() {
    return (
        <Card className="m-4">
            <div className="p-4">
                <div className="flex flex-col tablet:justify-between tablet:flex-row">
                    <div className="flex items-center justify-between">
                        <p className="mr-4 text-xl text-gray-500 font-bold">
                            {data.userName}
                        </p>
                        <Rating
                            name="customized-10"
                            defaultValue={data.rating}
                            max={10}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-xl text-gray-500 font-bold mr-2">
                            {data.date}
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
                    <p className="mr-8">{data.comment}</p>
                    <div className="flex justify-end tablet:items-end">
                        <div className="flex-col flex justify-center items-center">
                            <IconButton>
                                <ThumbUpIcon />
                            </IconButton>
                            <p>{data.like}</p>
                        </div>

                        <div className="flex-col flex justify-center items-center">
                            <IconButton color="error">
                                <ThumbDownIcon />
                            </IconButton>
                            <p>{data.dislike}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
