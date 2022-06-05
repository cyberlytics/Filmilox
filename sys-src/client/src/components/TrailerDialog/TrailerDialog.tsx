import React from 'react';
import { useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { IMovie } from '../../model/IMovie';
import YouTube from 'react-youtube';
import { Skeleton } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    movie: IMovie;
}

export default function TrailerDialog({ open, setOpen, movie }: IProps) {
    const youtubeRef = useRef<any>();
    const [mount, setMount] = useState(false);

    const handleClose = () => {
        youtubeRef.current.destroyPlayer();
        setOpen(false);
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleOnReady = () => {
        setMount(true);
    };

    return (
        <Dialog
            style={{ background: 'rgba(1,1,1,0.86)' }}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            maxWidth="lg"
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <div className={`${mount ? 'flex' : 'hidden'}`}>
                <YouTube
                    ref={youtubeRef}
                    videoId={movie.trailer.split('v=')[1].split('&')[0]}
                    opts={opts}
                    onReady={handleOnReady}
                />
            </div>

            {!mount && (
                <Skeleton variant="rectangular" width={640} height={390} />
            )}
        </Dialog>
    );
}
