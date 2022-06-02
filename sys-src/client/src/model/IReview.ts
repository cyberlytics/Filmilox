export interface IReviewAdd {
    movieId: string;
    rating: number;
    comment: string;
}

export interface IReviewGet {
    _id: string;
    userId: string;
    movieId: string;
    rating: number;
    comment: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}
