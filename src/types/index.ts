export interface IImage {
    id: string;
    urls: any;
    isSaved: boolean;
}

export interface ISearchQuery {
    page: number;
    results: IImage[];
    searchTerm: string;
    isLoading: boolean;
    error: any;
}

export interface IAppState {
    searchQuery: ISearchQuery;
    savedImages: IImage[];
}