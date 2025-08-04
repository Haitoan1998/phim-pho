"use client";

import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import "./BannerHome.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faHeart, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { getHomeFilmHot, getHomeTopic } from "@/lib/api/productService";
import { formatMinutesToHours } from "@/lib/helpers/time";
import { Carousel } from "antd";
import CardTopicUi from "@/components/ui/CardTopicUi";
import { useGetTopicsHome } from "@/hooks/useGetTopicsHome";
import { convertStaticImage } from "@/lib/helpers/function";

export default function BannerHome() {
  const { antdTheme }: any = useTheme();
  const [filmHot, setFilmHot] = useState<any[]>([]);
  const [currentMovie, setCurrentMovie] = useState<any>(null);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // event handlers
  const handleMouseEnter = () => {
    setIsSliding(true);
  };
  const handleMovieChange = (index: number) => {
    if (isSliding || index === currentMovieIndex) return;
    setIsSliding(true);
    setCurrentMovieIndex(index);
    setTimeout(() => setIsSliding(false), 500);
  };

  const handleMouseLeave = () => {
    setIsSliding(false);
  };

  // side effect
  useEffect(() => {
    if (filmHot.length > 0) {
      setCurrentMovie(filmHot[currentMovieIndex]);
    }
  }, [currentMovieIndex, filmHot]);
  useEffect(() => {
    getHomeFilmHot().then((res) => {
      setFilmHot(res.result);
    });
  }, []);
  return (
    <section className="bg-gray-900 text-white">
      <div className="w-full overflow-hidden relative">
        <div className={`banner-gradient absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_30%,rgba(0,0,0,0.8)_100%)] z-10`} />
        <div className="absolute inset-0 from-black/80 via-transparent to-black/80 z-10" />
        <div className="relative">
          <Carousel dots={false}>
            {filmHot.map((movie, index) => (
              <div key={movie._id} className={`relative w-full h-[80vh] ${index === currentMovieIndex ? "scale-105" : ""} transition-all duration-100 ease-in-out transform ${isSliding ? "opacity-0 translate-x-[50px]" : "opacity-100 translate-x-0"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image src={convertStaticImage(currentMovie?.images?.backdrops[0].path)} alt={movie.title} fill className="object-cover" />
              </div>
            ))}
          </Carousel>
          <div className="absolute bottom-[-50px] w-full h-[45%] z-0" style={{ background: "linear-gradient(180deg, rgba(8,39,92,0) 0%, #101828 65%)" }}></div>
        </div>
        <div className={`absolute bg-transparent bottom-[10%] left-0 z-20 p-8 w-full transition-all duration-100 ease-in-out transform ${isSliding ? "opacity-0 translate-x-[-50px]" : "opacity-100 translate-x-0"}`}>
          <div>{currentMovie?.images?.titles.length > 0 ? <Image src={process.env.NEXT_PUBLIC_STATIC_URL + currentMovie.images.titles[0].path.split("/").pop()} alt={currentMovie?.title} width={500} height={150} className="object-cover" /> : <h1 className="text-5xl text-left font-bold mb-4">{currentMovie?.title}</h1>}</div>
          <div className="text-left text-base py-5 text-[#f0d25c]">{currentMovie?.english_title}</div>
          <div className="flex items-center gap-4 mb-4">
            {typeof currentMovie?.imdb_rating === "number" || typeof currentMovie?.imdb_rating === "string" ? (
              <span className="bg-[#ffffff10] text-white px-2 py-1 rounded border border-[#f0d25c] font-bold">
                <span className="text-[#f0d25c] font-normal">IMDb</span> {currentMovie?.imdb_rating}
              </span>
            ) : null}
            {currentMovie?.quality === "4k" && <span className="border bg-[linear-gradient(220deg,_#FFD875,_#FFF)] text-black font-bold border-white/30 px-2 py-1 rounded">4K</span>}
            <span className="border bg-white text-black font-bold border-white/30 px-2 py-1 rounded">{currentMovie?.rating}</span>
            <span className="border border-white px-2 py-1 rounded">{currentMovie?.year}</span>
            {currentMovie?.latest_season ? <></> : <span className="border border-white px-2 py-1 rounded">{formatMinutesToHours(currentMovie?.runtime)}</span>}
            {currentMovie?.latest_season ? <span className="border border-white px-2 py-1 rounded">Phần {currentMovie?.latest_season}</span> : <></>}
            {currentMovie?.latest_season ? <span className="border border-white px-2 py-1 rounded">Tập {currentMovie?.latest_episode["1"] || currentMovie?.latest_episode["4"]}</span> : <></>}
          </div>
          <div className="flex items-center gap-4 mb-4">
            {currentMovie?.genres.length > 0 &&
              currentMovie?.genres.map((genre: any) => (
                <div className="flex gap-4 bg-[#ffffff10] text-xs text-white hover:text-[#f0d25c] px-2 py-1 rounded-sm" key={genre._id as string}>
                  {genre.name}
                </div>
              ))}
          </div>
          <p className="max-w-2xl text-white text-left mb-8 line-clamp-3">{currentMovie?.overview}</p>
          <div className="flex gap-4 h-24 items-center">
            <button className="bg-[#f0d25c] h-[80%] aspect-square text-black flex justify-center items-center rounded-full hover:bg-yellow-400 transition">
              <FontAwesomeIcon icon={faPlay} className="text-3xl" />
            </button>
            <div className="flex h-[50%] border rounded-full hover:border-2">
              <button className="bg-[#ffffff10] px-7 rounded-l-full border-r border-white/20 flex items-center gap-2 hover:text-[#f0d25c] transition">
                <FontAwesomeIcon icon={faHeart} className="text-xl" />
              </button>
              <button className="bg-[#ffffff10] px-7 rounded-r-full  border-white/20 flex items-center gap-2 hover:text-[#f0d25c] transition">
                <FontAwesomeIcon icon={faCircleInfo} className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/5 right-24 z-30">
          <div className="flex gap-2 backdrop-blur-sm">
            {filmHot.map((movie, index) => (
              <div key={movie._id} className={`w-16 h-10 relative overflow-hidden border-[2px] rounded-[0.5rem] transition cursor-pointer ${index === currentMovieIndex ? "border-white scale-105" : "border-transparent hover:border-white"}`} onClick={() => handleMovieChange(index)}>
                <Image src={convertStaticImage(movie?.images?.backdrops[movie?.images?.backdrops?.length - 1].path)} alt={movie.title} fill className="object-cover" />
                <div className={`absolute inset-0 bg-black/50 transition ${index === currentMovieIndex ? "opacity-0" : "opacity-50"}`} />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
