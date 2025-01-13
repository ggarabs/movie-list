import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "../../api/movieService";

const Hero = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movie-list"],
    queryFn: getMovieList,
  });

  if (isLoading) return <p>Is Loading...</p>;
  if (!data || error) return <div>Something went wrong :(</div>;

  return (
    <>
      {data.results.map((item) => (
        <p>{item.title}</p>
      ))}
    </>
  );
};

export default Hero;
