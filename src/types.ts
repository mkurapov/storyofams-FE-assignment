export interface Image {
    id: string;
    urls: any;
    isSaved: boolean;
}

export interface SearchQuery {
    page: number;
    results: Image[];
    searchTerm: string;
    isLoading: boolean;
    error: any;
}

export interface AppState {
    searchQuery: SearchQuery;
    savedImages: Image[];
}