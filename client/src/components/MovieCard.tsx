import Rating from '@mui/material/Rating';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MovieCard = () => {
    return (
        <div className="m-2">
            <Card sx={{ maxWidth: 200, maxHeight: 380 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image="https://quotecatalog.imgix.net/assets/titles-CvPsAP4zNZwf2s4VoEdvj6Jl/original.jpg?w=400&h=600&fit=crop"
                    alt="GoodFellas Movie Poster"
                ></CardMedia>
                <CardContent className="content-center">
                    <Typography component="div" style={{ left: 0 }}>
                        GoodFellas
                    </Typography>
                    <Typography style={{ left: 0 }}>
                        <Rating
                            name="movie-rating"
                            defaultValue={0}
                            max={10}
                            size="small"
                        />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default MovieCard;
