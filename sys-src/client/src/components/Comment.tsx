import React, { useState } from 'react';
import { Grid, Rating } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

let name = '@Arina';
const commentDate = new Date();

const cDate = `${commentDate.getDate()}.${
    commentDate.getMonth() + 1
}.${commentDate.getFullYear()}`;
let comment =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

const color = {
    color: 'grey',
    paddingRight: '10px',
};

const styles = {
    alignItems: 'flex-end',
    padding: '2px',
    marginRight: '30px',
    paddingRight: '30px',
};
const container = {
    border: '2px solid rgba(0, 0, 0, 0.05)',
    padding: '15px',
};
const icons = {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '5px',
};

export default function Comment() {
    const [like, setCounterLike] = useState(0);
    const [dislike, setCounterDislike] = useState(0);
    //increase counter
    const increase = () => {
        setCounterLike((count) => count + 1);
    };

    //decrease counter
    const decrease = () => {
        setCounterDislike((count) => count - 1);
    };

    //reset counter
    const reset = () => {
        setCounterLike(0);
        setCounterDislike(0);
    };

    return (
        <Grid
            style={container}
            className="flex flex-col justify-start items-start mt-16"
        >
            <Grid item xs={6} style={styles}>
                <span style={color}>{name}</span>
                <Rating name="customized-10" defaultValue={2} max={10} />
                <div>{comment}</div>
            </Grid>
            <div>
                <Grid>
                    <Grid item style={color}>
                        {cDate}
                    </Grid>
                    <Grid item className="pt-2 pb-5">
                        <button>
                            <EditIcon />
                        </button>
                        <button>
                            <DeleteIcon />
                        </button>
                    </Grid>
                </Grid>

                <div className="mr-5">
                    <Grid style={icons} className="pt-20">
                        <button onClick={increase}>
                            <ThumbUpIcon />
                            {like}
                        </button>
                        <button onClick={decrease}>
                            <ThumbDownIcon />
                            {dislike}
                        </button>
                    </Grid>
                    <div style={icons}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </Grid>
    );
}
