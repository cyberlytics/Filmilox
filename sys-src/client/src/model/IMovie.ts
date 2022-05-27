export interface IMovie {
    title: string;
    description: string;
    trailer: string;
    release: Date | null;
    image?: string;
    rating?: number;
}
