"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const TopAnime = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/topAnime");
        const data = await response.json();
        setAnimeData(data.data)
        console.log(data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(animeData,"asdas")

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    arrows:false,
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
          <h2 className=" relative font-semibold text-lg ml-2 mb-2 text-white">Top Airing</h2>
      <Slider {...settings}>
        {animeData&& Array.isArray(animeData) && animeData.map((anime) => (
          <div className="flex rounded-2xl w-[250px] h-50 px-2">
            {console.log("Sadas")}
            <div className="relative">
              <Link href={"/search/" + anime.mal_id} anime={anime}>
                <img
                  className="rounded-3xl object-cover h-full"
                  src={anime.images.jpg.large_image_url}
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