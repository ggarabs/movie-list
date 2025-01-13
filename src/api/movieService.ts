import apiClient from "./apiClient";
import { enpoints } from "./endpoints";

type MovieList = {
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: [number];
      id: string;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }
  ];
  total_pages: number;
  total_results: number;
};

export const getMovieList = async (): Promise<MovieList> => {
  return (await apiClient.get(enpoints.movieList)).data;
};