"use client";
import { React, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
const TopAnime = () => {
  const { TopAnime, setTopAnime } = useStore();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["topAnime"],
    queryFn: async () => {
      const response = await fetch("/api/topAnime");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.data;
    },
  });

  useEffect(() => {
    if (data) {
      setTopAnime(data);
    }
  }, [data]);
  if (true) {
    return (
      <>
        <div
          
            className="flex mx-6 px-2 animate-pulse gap-2"
          >
        {Array.from({ length: 6 }).map((_, index) => (
            <div className="relative"   key={index}>
              <div className="bg-gray-300 rounded-3xl object-cover h-[310px] w-[200px]"></div>
              <div className="pl-3 mt-1 mx-auto bg-gray-300 rounded-md h-2 w-3/4"></div>
            </div>
        ))}
        </div>
      </>
    );
  }
  

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-2 mx-6 h-full z-10">
      <h2 className=" relative font-semibold text-lg ml-2 mb-2 text-white">
        Top Airing
      </h2>
      <Slider {...settings}>
        {TopAnime &&
          Array.isArray(TopAnime) &&
          TopAnime.map((anime) => (
            <div className="flex rounded-2xl w-[250px] h-50 px-2">
              <div className="relative">
                <Link href={"/search/" + anime.mal_id} anime={anime}>
                  <img
                    className="rounded-3xl object-cover h-full"
                    src={anime.images.jpg.large_image_url}
                    width={250}
                    height={375}
                    alt=""
                  />

                  <h1 className="pl-3 hover:text-sky-300 text-white my-1 text-md truncate ...">
                    {anime.title}
                  </h1>
                </Link>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default TopAnime;
