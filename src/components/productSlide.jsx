import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackwordArrowIcon from "../assets/backwardArrow";
import ForwardArrowIcon from "../assets/forwardArrow";
import { sliderImages } from "../assets/store/homepageContent";

export function Carousel() {
  return (
    <div className="w-full lg:w-10/12 block xl:absolute xl:top-16 mx-auto lg:my-2 xl:my-0 xl:left-32 2xl:left-40">
      <SliderContent slides={sliderImages} />
    </div>
  );
}
function SliderContent({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      current === slides.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  function prevSlide() {
    current === 0 ? setCurrent(slides.length - 1) : setCurrent(current - 1);
  }

  function nextSlide() {
    current === slides.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-in-out duration-400 mt-px"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, i) => (
          <img src={s} key={i} />
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-start flex">
        <div
          onClick={prevSlide}
          className="hidden lg:flex h-80 rounded  justify-center items-center p-4"
        >
          <BackwordArrowIcon />
        </div>
        <Link to="/products" className="w-full h-full"></Link>
        <div
          onClick={nextSlide}
          className="hidden lg:flex h-80 rounded  justify-center items-center p-4"
        >
          <ForwardArrowIcon />
        </div>
      </div>
    </div>
  );
}
