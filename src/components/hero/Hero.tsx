import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "../../api/movieService";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getImgPath } from "../../api/imageService";

const Hero = () => {
  SwiperCore.use([Autoplay]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie-list"],
    queryFn: getMovieList,
  });

  if (isLoading) return <p>Is Loading...</p>;
  if (!data || error) return <div>Something went wrong :(</div>;

  return (
    <div className="hero">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {data.results.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={getImgPath(item.backdrop_path)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
